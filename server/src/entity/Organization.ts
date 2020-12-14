import { Field, Int, ObjectType } from "type-graphql";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToMany, JoinTable} from "typeorm";
import { Project } from "./Project";
import { User } from "./User";

@ObjectType()
@Entity()
export class Organization extends BaseEntity {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column("text")
    name: string;

    @Column("text")
    logo: string;

    @Field(() => [Project], { nullable: true })
    @OneToMany(() => Project, project => project.organization)
    projects: Project[];

    @ManyToMany(() => User, user => user.organizations, { cascade: true })
    @JoinTable()
    users: User[];

    @ManyToMany(() => User, user => user.admin, { cascade: true })
    @JoinTable()
    admins: User[];
}
