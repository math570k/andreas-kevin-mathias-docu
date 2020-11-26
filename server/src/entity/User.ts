import { Organization } from './Organization';
import { Field, Int, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany } from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity {

    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column("text")
    email: string;

    @Column("text")
    password: string;

    @Column("text")
    firstName: string

    @Column("text")
    lastName: string

    @Column("int", { default: 0 })
    tokenVersion: number;

    @ManyToMany(() => Organization, organization => organization.administrators)
    organizations: Organization[];
}
