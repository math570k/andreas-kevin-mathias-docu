import { Project } from './../entity/Project';
import { Organization } from './../entity/Organization';
import { User } from './../entity/User';
import { Arg, Mutation, Resolver, Query, InputType, Field, Int } from "type-graphql";
import { getRepository, BaseEntity } from 'typeorm';


@InputType()
class IOrganizationType {
    @Field()
    name: string

    @Field(() => String, { nullable: false })
    logo: string
}

@InputType()
class IDescriptionType {
    @Field(() => String, { nullable: true })
    name?: string;
  
    @Field(() => String, { nullable: true })
    logo?: string;
}

@Resolver()
export class OrganizationResolver {

    // Create
    @Mutation(() => Boolean)
    async createOrganization(
        @Arg("user_id", () => Int) user_id : number,
        @Arg("organization", () => IOrganizationType) organization : IOrganizationType
    ) : Promise<boolean | undefined> {

        let org = await Organization.create(organization);
        
        const user = await User.findOne({id: user_id}) as User;
        
        org.admins = [user];
        org.users = [user];
        org = await Organization.save(org);

        return true
    }

    // Read
    @Query(() => [Organization])
    async organization(
        @Arg("organization_id", () => Int, {nullable: true}) id? : number
    ) : Promise<Organization[] | Organization | Project[]> {
        if(id) {
            const organization = await getRepository(Organization)
                .createQueryBuilder("organization")
                .where({id: id})
                .leftJoinAndSelect("organization.projects", "projects")
                .leftJoinAndSelect("projects.pages", "pages")
                .leftJoinAndSelect("projects.tags", "tags")
                .leftJoinAndSelect("pages.sections", "sections")
                .getMany()

            return organization;
        } else {
            return Organization.find();
        }
    }
    
    // Update
    @Mutation(() => Boolean)
    async updateOrganization(
        @Arg("id", () => Int) id: number,
        @Arg("description", () => IDescriptionType) description: IDescriptionType
    ) : Promise<boolean> {
        await Organization.update({ id }, description);
        return true
    }

    // Delete
    @Mutation(() => Boolean)
    async deleteOrganization(@Arg("id", () => Int) id: number): Promise<boolean> {
      await Organization.delete({ id });
      return true;
    }

    // Get all organizations users
    @Query(() => [User])
    async organizationUsers(
        @Arg("organization_id", () => Int) organization_id: BaseEntity
    ) : Promise<User[] | Error> {

        const organization = await getRepository(Organization)
            .createQueryBuilder("organization")
            .where({id: organization_id})
            .leftJoinAndSelect("organization.users", "user")
            .getOne()
            
        const users = await organization?.users

        if(users) {
            return users
        } 

        return Error("No users found");
    }
}