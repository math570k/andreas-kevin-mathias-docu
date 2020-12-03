import { BaseEntity } from 'typeorm';
import { Arg, Mutation, Resolver, Query, Int } from "type-graphql";
import { Section } from "../entity/Section";
import { ISectionType } from "../inputTypes/ISectionType";
import { SectionController } from "../controllers/SectionController";

@Resolver()
export class SectionResolver {

        // Create
        @Mutation(() => Boolean)
        async createSection(
            @Arg("page_id", () => Int) page_id: BaseEntity,
            @Arg("section", () => ISectionType) section : ISectionType
        ) : Promise<boolean | Error>{
            await SectionController.addSection(page_id, section);
            return true
        }
        
        @Query(() => [Section])
        async sections(
            @Arg("page_id", () => Int, { nullable: true }) page_id?: BaseEntity,
        ) : Promise<Section[]> {
            if (page_id) {
                return SectionController.getSection(page_id);
            }

            return SectionController.getSection();
        }

        // Update
        @Mutation(() => Boolean)
        async updateSection(
            @Arg("id", () => Int) id: number,
            @Arg("description", () => ISectionType) description: ISectionType
        ) : Promise<boolean> {
            await SectionController.editSection(id, description);
            return true;
        }
    
        // Delete
        @Mutation(() => Boolean)
        async deleteSection(@Arg("id", () => Int) id: number): Promise<boolean> {
            await SectionController.removeSection(id);
            return true;
        }
}