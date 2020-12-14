import { Project } from "../entity/Project";
import { Markdown } from "../helpers/markdown";
import { IProjectType } from "../inputTypes/IProjectType";
import { BaseEntity, getRepository } from "typeorm";

export class ProjectController {

    public static async addProject(org_id: BaseEntity, project: IProjectType) : Promise<unknown | Error> {
        try {
            return await Project.create({...project, organization: org_id}).save().catch((err: any) => {
                switch (err.code) {
                    case 'ER_DUP_ENTRY':
                        return Error("Something went wrong")
                }
                return true;
            })
        } catch (e) {
            throw new Error(e);
        }
    }

    public static async getProject(id?: number) : Promise<Project | undefined | Project[]> {
        const markdown = new Markdown();

        if (id) {
            const project = await getRepository(Project)
                .createQueryBuilder("project")
                .where({id: id})
                .leftJoinAndSelect("project.pages", "pages")
                .leftJoinAndSelect("project.tags", "tags")
                .leftJoinAndSelect("pages.sections", "sections")
                .getOne()

            if (project) {
                project.html = markdown.parseMarkdown(project.content);
            }

            return project;
        } else {
            return Project.find();
        }
    }

    public static async getProjectList(org_id?: BaseEntity) : Promise<Project[]> {
        if (org_id) {
            const projects = await getRepository(Project)
                .createQueryBuilder("projects")
                .where({organization: org_id})
                .leftJoinAndSelect("projects.pages", "pages")
                .leftJoinAndSelect("projects.tags", "tags")
                .leftJoinAndSelect("pages.sections", "sections")
                .getMany()

            return projects
        }

        return Project.find();
    }

    public static async updateProject(id: number, project: IProjectType) : Promise<unknown | Error> {
        try {
            return await Project.update({ id }, project);
        } catch(e) {
            throw new Error(e);
        }
    }

    public static async deleteProject(id: number) : Promise<unknown> {
        try {
            return await Project.delete({id});
        } catch(e) {
            throw new Error(e);
        }
    }

}