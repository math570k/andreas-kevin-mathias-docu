import { Field, InputType, Int } from "type-graphql"

@InputType()
export class ISectionType {
    @Field()
    title: string

    @Field(() => String, { nullable: true })
    content: string

    @Field(() => Int, { nullable: true })
    order: number
}
