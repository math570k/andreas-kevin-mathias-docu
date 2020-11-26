import { BaseEntity } from 'typeorm';
import { Arg, Mutation, Resolver, Query, InputType, Field, Int } from "type-graphql";
import { Page } from "../entity/Page";

@InputType()
class IPageType {
    @Field()
    title: string

    @Field(() => String, { nullable: true })
    content: string

    @Field(() => Int, { nullable: true })
    order: number
}

@Resolver()
export class PageResolver {

        // Create
        @Mutation(() => Boolean)
        async createPage(
            @Arg("project_id", () => Int) project_id : BaseEntity,
            @Arg("page", () => IPageType) page : IPageType
        ) : Promise<boolean> {
            await Page.create({...page, project: project_id}).save().catch((err: any) => {
                switch (err.code) {
                  case 'ER_DUP_ENTRY':
                    return Error("Something went wrong")
                } return;
            })
            return true
        }
    
        // Read
        @Query(() => [Page])
        Pages() : Promise<Page[]> {
            return Page.find();
        }
        
        // Update
        @Mutation(() => Boolean)
        async updatePage(
            @Arg("id", () => Int) id: number,
            @Arg("description", () => IPageType) description: IPageType
        ) : Promise<boolean> {
            await Page.update({ id }, description);
            return true
        }
    
        // Delete
        @Mutation(() => Boolean)
        async deletePage(@Arg("id", () => Int) id: number): Promise<boolean> {
          await Page.delete({ id });
          return true;
        }
}