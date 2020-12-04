import { BaseEntity, getRepository } from 'typeorm';
import { Arg, Mutation, Resolver, Query, InputType, Field, Int } from "type-graphql";
import { Tag } from "../entity/Tag";

@InputType()
class ITagType {
    @Field()
    title: string
}

@Resolver()
export class ProjectResolver {

    // Create
    @Mutation(() => Boolean)
    async createTag(
        @Arg("org_id", () => Int) project_id: BaseEntity,
        @Arg("tag", () => ITagType) tag : ITagType
    ) : Promise<boolean | Error>{

        await Tag.create({...tag, project: project_id}).save().catch((err: any) => {
            switch (err.code) {
              case 'ER_DUP_ENTRY':
                return Error("Something went wrong")
            } return;
        })

        return true
    }

    // Read single
    @Query(() => Tag)
    Tag(
        @Arg("id", () => Int) id : number
    ) : Promise<Tag | undefined> {
        return Tag.findOne(id);
    }


    @Query(() => [Tag])
    async tags (
        @Arg("organization_id", () => Int, { nullable: true }) project_id?: BaseEntity,
    ) : Promise<Tag[]> {
        if(project_id) {
          const tags = await getRepository(Tag)
            .createQueryBuilder("section")
            .where({project: project_id})
            .getMany()
            
          return tags
        }
        
        return Tag.find();
    }


    
    // Update
    @Mutation(() => Boolean)
    async updateProject(
        @Arg("id", () => Int) id: number,
        @Arg("description", () => ITagType) description: ITagType
    ) : Promise<boolean> {
        await Tag.update({ id }, description);
        return true
    }

    // Delete
    @Mutation(() => Boolean)
    async deleteProject(@Arg("id", () => Int) id: number): Promise<boolean> {
        await Tag.delete({ id });
        return true;
    }
}