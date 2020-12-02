import { IDraft } from "../inputTypes/IDraft";
import { Arg, Mutation, Query } from "type-graphql";
import { Mongo } from "../mongo";
import { Draft } from "../entity/Draft";
import { ObjectId } from "mongodb";

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
    
}