import { BaseEntity, getRepository } from 'typeorm';
import { Arg, Mutation, Resolver, Query, InputType, Field, Int } from "type-graphql";
import { Project } from "../entity/Project";

@InputType()
class IProjectType {
    @Field()
    color: string

    @Field()
    title: string

    @Field()
    description: string

    @Field()
    content: string
}

@Resolver()
export class ProjectResolver {

    // Create
    @Mutation(() => Boolean)
    async createProject(
        @Arg("org_id", () => Int) org_id: BaseEntity,
        @Arg("project", () => IProjectType) project : IProjectType
    ) : Promise<boolean | Error>{

        await Project.create({...project, organization: org_id}).save().catch((err: any) => {
            switch (err.code) {
              case 'ER_DUP_ENTRY':
                return Error("Something went wrong")
            } return;
        })

        return true
    }

    // Read single
    @Query(() => Project)
    project(
        @Arg("id", () => Int) id : number
    ) : Promise<Project | undefined> {
        return Project.findOne(id);
    }


    @Query(() => [Project])
    async projects (
        @Arg("organization_id", () => Int, { nullable: true }) organization_id?: BaseEntity,
    ) : Promise<Project[]> {
        if(organization_id) {
          const projects = await getRepository(Project)
            .createQueryBuilder("section")
            .where({organization: organization_id})
            .getMany()
            
          return projects
        }
        
        return Project.find();
    }


    
    // Update
    @Mutation(() => Boolean)
    async updateProject(
        @Arg("id", () => Int) id: number,
        @Arg("description", () => IProjectType) description: IProjectType
    ) : Promise<boolean> {
        await Project.update({ id }, description);
        return true
    }

    // Delete
    @Mutation(() => Boolean)
    async deleteProject(@Arg("id", () => Int) id: number): Promise<boolean> {
        await Project.delete({ id });
        return true;
    }
}