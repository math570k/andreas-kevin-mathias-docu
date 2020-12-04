import { BaseEntity, getRepository } from "typeorm";
import { Section } from "../entity/Section";
import { ISectionType } from "../inputTypes/ISectionType";
import { Markdown } from "../helpers/markdown";

export class SectionController {
    
    /**
     * Create a section
     */
    public static async addSection(page_id: BaseEntity, section: ISectionType) : Promise<unknown | Error> {
        try {
            return await Section.create({...section, page: page_id}).save().catch((err: any) => {
                switch (err.code) {
                  case 'ER_DUP_ENTRY':
                    return Error("Something went wrong")
                } return;
            });
        } catch (e) {
            throw new Error(e);
        }
    }

    public static async editSection(id: number, description: ISectionType) : Promise<unknown | Error> {
        try {
            return await Section.update({ id }, description);
        } catch(e) {
            throw new Error(e);
        }
    }

    public static async getSection(page_id?: BaseEntity) : Promise<Section[]> {
        const markdown = new Markdown();

        if(page_id) {
            const pages = await getRepository(Section)
                .createQueryBuilder("section")
                .where({page: page_id})
                .getMany()

            pages.forEach(page => {
                page.html = markdown.parseMarkdown(page.content);
            });

            return pages;
        }
          
        const sections = await Section.find();
        sections.forEach(page => {
            page.html = markdown.parseMarkdown(page.content);
        });

        return sections;
    }

    public static async removeSection(id: number) : Promise<unknown> {
        return await Section.delete({ id });
    }

}