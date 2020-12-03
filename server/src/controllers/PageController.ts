import { Page } from "../entity/Page";
import { IPageType } from "../inputTypes/IPageType";
import { BaseEntity, getRepository } from "typeorm";

export class PageController {

    public static async addPage(project_id: BaseEntity, page: IPageType) : Promise<unknown | Error> {
        try {
            return await Page.create({...page, project: project_id}).save().catch((err: any) => {
                switch (err.code) {
                  case 'ER_DUP_ENTRY':
                    return Error("Something went wrong")
                } return;
            });
        } catch (e) {
            throw new Error(e);
        }
    }

    public static async editPage(id: number, description: IPageType) : Promise<unknown | Error> {
        try {
            return await Page.update({ id }, description);
        } catch (e) {
            throw new Error(e);
        }
    }

    public static async getPages(project_id?: BaseEntity) : Promise<Page[] | Page | undefined> {
        if(project_id) {
            const pages = await getRepository(Page)
            .createQueryBuilder("page")
            .where({project: project_id})
            .getMany()
            return pages
        }

        return Page.find();
    }

    public static async removePage(id: number) : Promise<unknown> {
        try {
            return await Page.delete({ id });
        } catch (e) {
            throw new Error(e);
        }
    }

}