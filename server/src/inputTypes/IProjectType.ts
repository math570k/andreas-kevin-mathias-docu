import { Field, InputType } from "type-graphql"

@InputType()
export class IProjectType {
    @Field()
    color: string

    @Field()
    title: string

    @Field()
    description: string

    @Field()
    content: string
}