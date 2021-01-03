import { Organization } from "../entity/Organization";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class LoginResponse {
    @Field()
    accessToken: string

    @Field(() => [Organization])
    admin: Organization[]
}