import {BaseEntity} from 'typeorm';
import {Arg, Mutation, Resolver, Query, Int} from "type-graphql";
import {Project} from "../entity/Project";
import { IProjectType } from '../inputTypes/IProjectType';
import { ProjectController } from '../controllers/ProjectController';

@Resolver()
export class ProjectResolver {

    // Create
    @Mutation(() => Boolean)
    async createProject(
        @Arg("org_id", () => Int) org_id: BaseEntity,
        @Arg("project", () => IProjectType) project: IProjectType
    ): Promise<unknown | Error> {
        return await ProjectController.addProject(org_id, project);
    }

    // Read single
    @Query(() => Project)
    async project(
        @Arg("id", () => Int) id: number
    ): Promise<Project | undefined | Project[]> {
        return await ProjectController.getProject(id);
    }


    @Query(() => [Project])
    async projects(
        @Arg("organization_id", () => Int, {nullable: true}) organization_id?: BaseEntity,
    ): Promise<Project[]> {
        if (organization_id) {
            return await ProjectController.getProjectList(organization_id);
        }
        
        return await ProjectController.getProjectList();
    }


    // Update
    @Mutation(() => Boolean)
    async updateProject(
        @Arg("id", () => Int) id: number,
        @Arg("description", () => IProjectType) project: IProjectType
    ): Promise<unknown> {
        return await ProjectController.updateProject(id, project);
    }

    // Delete
    @Mutation(() => Boolean)
    async deleteProject(@Arg("id", () => Int) id: number): Promise<unknown> {
        return await ProjectController.deleteProject(id);
    }
}