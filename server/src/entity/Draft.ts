import { Field, ObjectType } from "type-graphql";
import GraphQLJSON from 'graphql-type-json';

@ObjectType()
export class Draft {

    @Field()
    _id: string

    @Field()
    type: string

    @Field()
    action: string

    @Field(() => GraphQLJSON)
    content: any;

    @Field()
    userId: number

    @Field()
    organizationId: number

}
