import { Field, Int, ObjectType } from "type-graphql";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm";
import { Page } from "./Page";

@ObjectType()
@Entity()
export class Section extends BaseEntity {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column("text")
    title: string;

    @Field()
    @Column("text")
    content: string;

    @Field()
    @Column("int")
    order: number;

    @Field({ nullable: true })
    html: string;

    @ManyToOne(() => Page, page => page.sections)
    page: Page
}
