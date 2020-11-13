import { Field, Int, ObjectType } from "type-graphql";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany} from "typeorm";
import { Project } from "./Project";
import { Section } from "./Section";

@ObjectType()
@Entity()
export class Page extends BaseEntity {

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

    @ManyToOne(() => Project, project => project.pages)
    project: Project

    @OneToMany(() => Section, section => section.page)
    sections: Section[];

}
