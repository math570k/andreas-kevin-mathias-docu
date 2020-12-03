import { InputType, Field, Int } from "type-graphql"

@InputType()
export class IPageType {
    @Field()
    title: string

    @Field(() => String, { nullable: true })
    content: string

    @Field(() => Int, { nullable: true })
    order: number
}