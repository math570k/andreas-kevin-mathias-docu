import { Field, Int, ObjectType } from "type-graphql";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany} from "typeorm";
import { Organization } from "./Organization";
import { Page } from "./Page";

@ObjectType()
@Entity()
export class Project extends BaseEntity {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column("text")
    color: string;

    @Field()
    @Column("text")
    title: string;

    @Field()
    @Column("text")
    content: string;
    
    @ManyToOne(() => Organization, organization => organization.projects)
    organization: Organization

    @OneToMany(() => Page, page => page.project)
    pages: Page[];

}
