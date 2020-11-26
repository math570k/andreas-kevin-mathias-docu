import { BaseEntity, getRepository } from 'typeorm';
import { Arg, Mutation, Resolver, Query, InputType, Field, Int } from "type-graphql";
import { Section } from "../entity/Section";

@InputType()
class ISectionType {
    @Field()
    title: string

    @Field(() => String, { nullable: true })
    content: string

    @Field(() => Int, { nullable: true })
    order: number
}

@Resolver()
export class SectionResolver {

        // Create
        @Mutation(() => Boolean)
        async createSection(
            @Arg("page_id", () => Int) page_id: BaseEntity,
            @Arg("section", () => ISectionType) section : ISectionType
        ) : Promise<boolean | Error>{
    
            await Section.create({...section, page: page_id}).save().catch((err: any) => {
                switch (err.code) {
                  case 'ER_DUP_ENTRY':
                    return Error("Something went wrong")
                } return;
            })
    
            return true
        }
        
        @Query(() => [Section])
        async sections(
            @Arg("page_id", () => Int, { nullable: true }) page_id?: BaseEntity,
        ) : Promise<Section[]> {
            if(page_id) {
              const pages = await getRepository(Section)
                .createQueryBuilder("section")
                .where({page: page_id})
                .getMany()
                return pages
            }
            
            return Section.find();
        }



        // Update
        @Mutation(() => Boolean)
        async updateSection(
            @Arg("id", () => Int) id: number,
            @Arg("description", () => ISectionType) description: ISectionType
        ) : Promise<boolean> {
            await Section.update({ id }, description);
            return true
        }
    
        // Delete
        @Mutation(() => Boolean)
        async deleteSection(@Arg("id", () => Int) id: number): Promise<boolean> {
          await Section.delete({ id });
          return true;
        }
}