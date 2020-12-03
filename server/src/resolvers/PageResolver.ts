import { BaseEntity } from 'typeorm';
import { Arg, Mutation, Resolver, Query, Int } from "type-graphql";
import { Page } from "../entity/Page";
import { IPageType } from '../inputTypes/IPageType';
import { PageController } from '../controllers/PageController';

@Resolver()
export class PageResolver {

        // Create
        @Mutation(() => Boolean)
        async createPage(
            @Arg("project_id", () => Int) project_id : BaseEntity,
            @Arg("page", () => IPageType) page : IPageType
        ) : Promise<boolean> {
            await PageController.addPage(project_id, page);
            return true
        }
    
        // Read
        @Query(() => [Page])
        async pages(
            @Arg("project_id", () => Int, { nullable: true }) project_id?: BaseEntity,
        ) : Promise<Page[] | Page | undefined> {
            if (project_id) {
                return await PageController.getPages(project_id);
            }

            return await PageController.getPages();
        }
        
        // Update
        @Mutation(() => Boolean)
        async updatePage(
            @Arg("id", () => Int) id: number,
            @Arg("description", () => IPageType) description: IPageType
        ) : Promise<boolean> {
            await PageController.editPage(id, description);
            return true
        }
    
        // Delete
        @Mutation(() => Boolean)
        async deletePage(@Arg("id", () => Int) id: number): Promise<boolean> {
          await PageController.removePage(id);
          return true;
        }
}