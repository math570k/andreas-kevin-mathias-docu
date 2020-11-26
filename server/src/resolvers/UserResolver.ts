import { Organization } from './../entity/Organization';
import {Arg, Ctx, Int, Mutation, Query, Resolver, UseMiddleware} from "type-graphql";
import {compare, hash} from "bcryptjs";
import { User } from "../entity/User";
import { AppContext } from "../AppContext";
import { createAccessToken, createRefreshToken, sendRefreshToken } from "../helpers/auth";
import { isAuth } from "../middleware/authMiddleware";
import { getConnection, BaseEntity, getRepository } from "typeorm";
import { LoginResponse } from "../objectTypes/LoginResponse";

@Resolver()
export class UserResolver {

    /**
     * QUERY: Protect this route with JWT - send user ID back if successful
     */
    @Query(() => String)
    @UseMiddleware(isAuth)
    bye(
        @Ctx() {payload}: AppContext
    ) : string {
        return `your user id is: ${payload!.userId}`;
    }

    @Query(() => [User])
    users() : Promise<User[]> {
        return User.find()
    }

    /**
     * MUTATION: Revoke refresh tokens by userId
     * @param userId 
     */
    // TODO: Restrict this to system administrator
    @Mutation(() => Boolean)
    async revokeRefreshTokensForUser(
        @Arg("userId", () => Int) userId: number
    ) : Promise<boolean> {
        await getConnection().getRepository(User).increment({ id: userId }, 'tokenVersion', 1);

        return true;
    }

    /**
     * MUTATION: Login user
     * 
     * @param email 
     * @param password 
     */
    @Mutation(() => LoginResponse)
    async login(
        @Arg("email", () => String) email: string,
        @Arg("password", () => String) password: string,
        @Ctx() {res}: AppContext
    ) : Promise<LoginResponse> {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            throw new Error("Could not find user");
        }

        const valid = await compare(password, user.password);

        if (!valid) {
            throw new Error("Incorrect Password");
        }

        sendRefreshToken(res, createRefreshToken(user));

        return {
            accessToken: createAccessToken(user)
        };
    }

    /**
     * MUTATION: Register a user
     * 
     * @param email 
     * @param password 
     */
    @Mutation(() => Boolean)
    async register(
        @Arg("email", () => String) email: string,
        @Arg("password", () => String) password: string,
        @Arg("firstName", () => String) firstName: string,
        @Arg("lastName", () => String) lastName: string,
    ) : Promise<boolean> {
        const hashedPassword = await hash(password, 12);

        try {
            await User.insert({
                email,
                password: hashedPassword,
                firstName,
                lastName,
            });
            return true;
        } catch(err) {
            return false;
        }
    }

    // Get all users organization
    @Mutation(() => [Organization])
    async userOrganizations(
        @Arg("user_id", () => Int) user_id: BaseEntity
    ) : Promise<Organization[] | Error> {

        const usersWithOrgs = await getRepository(User)
            .createQueryBuilder("user")
            .where({id: user_id})
            .leftJoinAndSelect("user.organizations", "organization")
            .getOne();
            
        const orgs = await usersWithOrgs?.organizations

        if(orgs) {
            return orgs
        } 
        
        return Error("No organizations found");
    }

}