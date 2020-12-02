import GraphQLJSON from "graphql-type-json";
import { Field, InputType } from "type-graphql";

@InputType()
export class IDraft {
    
    @Field({ nullable: true })
    type: string

    @Field({ nullable: true })
    action: string

    @Field(() => GraphQLJSON, { nullable: true })
    content: any;

    @Field({ nullable: true })
    userId: number

    @Field({ nullable: true })
    organizationId: number

}
