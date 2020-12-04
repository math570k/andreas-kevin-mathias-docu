import { Project } from './Project';
import { Field, Int, ObjectType } from "type-graphql";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm";

@ObjectType()
@Entity()
export class Tag extends BaseEntity {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column("text")
    title: string;

    @ManyToOne(() => Project, project => project.tags)
    project: Project
}
