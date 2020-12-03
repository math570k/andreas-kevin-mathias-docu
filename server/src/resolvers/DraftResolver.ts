import { IDraft } from "../inputTypes/IDraft";
import { Arg, Mutation, Query } from "type-graphql";
import { Mongo } from "../mongo";
import { Draft } from "../entity/Draft";
import { ObjectId } from "mongodb";
import { SectionController } from "../controllers/SectionController";
import { PageController } from "../controllers/PageController";

export class DraftResolver {
    private collection = Mongo.client.db('draft').collection('drafts');

    /**
     * Create a draft
     * @param draft 
     */
    @Mutation(() => Boolean)
    async createDraft(
        @Arg("draft", () => IDraft) draft : IDraft
    ) : Promise<boolean | Error> {
        try {
            await this.collection.insertOne(draft)
            return true;
        } catch(e) {
            return e;
        }
    }

    /**
     * Get all drafts
     */
    @Query(() => [Draft])
    async drafts() : Promise<Draft[] | Error> {
        try {
            const cursor = this.collection.find({});
            const drafts : Draft[] = [];

            await cursor.forEach(item => drafts.push(item));
            return drafts;
        } catch (e) {
            return e;
        }
    }

    /**
     * Find single draft
     */
    @Query(() => Draft)
    async draft(
        @Arg("id", () => String) id : string
    ) : Promise<Draft | Error> {
        try {
            const draft = await this.collection.find(new ObjectId(id)).toArray();
            return draft[0];
        } catch (e) {
            return e;
        }
    }

    /**
     * Delete a draft
     */
    @Mutation(() => Boolean)
    async deleteDraft(
        @Arg("id", () => String) id : string
    ) : Promise<boolean | Error> {
        try {
            await this.collection.deleteOne({ _id: new ObjectId(id) });
            return true;
        } catch (e) {
            return e;
        }
    }

    /**
     * Update a draft
     */
    @Mutation(() => Boolean)
    async updateDraft(
        @Arg("id", () => String) id : string,
        @Arg("draft", () => IDraft) draft : IDraft
    ) : Promise<boolean | Error> {
        try {
            await this.collection.updateOne(
                { _id: new ObjectId(id) },
                { $set: draft }
            );
    
            return true;
        } catch(e) {
            return e;
        }
    }

    /**
     * Apply / Commit a draft
     * @param id
     */
    @Mutation(() => Boolean)
    async applyDraft(
        @Arg("id", () => String) id : string,
    ) : Promise<boolean | Error> {
        try {
            const cursor = await this.collection.find(new ObjectId(id)).toArray();
            const draft = cursor[0];

            switch (draft.action) {

                // The draft should be added as a new page or section
                case "new":
                    
                    if (draft.type === "section") {
                        await SectionController.addSection(draft.content.pageId, draft.content.section);
                    }

                    if (draft.type === "page") {
                        await PageController.addPage(draft.content.projectId, draft.content.page);
                    }

                    // Delete the draft after it has been comitted
                    await this.collection.deleteOne({ _id: new ObjectId(id) });

                    return true;

                    break;

                // The draft should update an existing page or section
                case "edit":
                    
                    if (draft.type === "section") {
                        await SectionController.editSection(draft.content.sectionId, draft.content.section);
                    }

                    if (draft.type === "page") {
                        await PageController.editPage(draft.content.pageId, draft.content.page);
                    }

                    // Delete the draft after it has been comitted
                    await this.collection.deleteOne({ _id: new ObjectId(id) });

                    return true;

                    break;
                
                // Throw error if no action could be determined
                default:
                    throw new Error("Could not determine what action to use for this draft");
            }

            return true;
        } catch (e) {
            return e;
        }
    }
    
}