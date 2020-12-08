import {MigrationInterface, QueryRunner} from "typeorm";

export class test1607097239091 implements MigrationInterface {
    name = 'test1607097239091'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tag" ("id" SERIAL NOT NULL, "title" text NOT NULL, "projectId" integer, CONSTRAINT "PK_8e4052373c579afc1471f526760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "section" ("id" SERIAL NOT NULL, "title" text NOT NULL, "content" text NOT NULL, "order" integer NOT NULL, "pageId" integer, CONSTRAINT "PK_3c41d2d699384cc5e8eac54777d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "page" ("id" SERIAL NOT NULL, "title" text NOT NULL, "content" text, "order" integer, "projectId" integer, CONSTRAINT "PK_742f4117e065c5b6ad21b37ba1f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "project" ("id" SERIAL NOT NULL, "color" text NOT NULL, "title" text NOT NULL, "description" text NOT NULL, "content" text NOT NULL, "organizationId" integer, CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "organization" ("id" SERIAL NOT NULL, "name" text NOT NULL, "logo" text NOT NULL, CONSTRAINT "PK_472c1f99a32def1b0abb219cd67" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "organization_administrators_user" ("organizationId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_251fbc97bfb19b225c3f6284c3e" PRIMARY KEY ("organizationId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_fceebcdbf7044125911f950b83" ON "organization_administrators_user" ("organizationId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a2ac49e2f3fdb768c7d7b53d69" ON "organization_administrators_user" ("userId") `);
        await queryRunner.query(`ALTER TABLE "tag" ADD CONSTRAINT "FK_5ed9c8937635b255539d31b2cce" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "section" ADD CONSTRAINT "FK_73a502c62159d28900594ba710e" FOREIGN KEY ("pageId") REFERENCES "page"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "page" ADD CONSTRAINT "FK_2d80076945d659dc90bbd11865a" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "FK_0028dfadf312a1d7f51656c4a9a" FOREIGN KEY ("organizationId") REFERENCES "organization"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "organization_administrators_user" ADD CONSTRAINT "FK_fceebcdbf7044125911f950b83c" FOREIGN KEY ("organizationId") REFERENCES "organization"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "organization_administrators_user" ADD CONSTRAINT "FK_a2ac49e2f3fdb768c7d7b53d691" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "organization_administrators_user" DROP CONSTRAINT "FK_a2ac49e2f3fdb768c7d7b53d691"`);
        await queryRunner.query(`ALTER TABLE "organization_administrators_user" DROP CONSTRAINT "FK_fceebcdbf7044125911f950b83c"`);
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "FK_0028dfadf312a1d7f51656c4a9a"`);
        await queryRunner.query(`ALTER TABLE "page" DROP CONSTRAINT "FK_2d80076945d659dc90bbd11865a"`);
        await queryRunner.query(`ALTER TABLE "section" DROP CONSTRAINT "FK_73a502c62159d28900594ba710e"`);
        await queryRunner.query(`ALTER TABLE "tag" DROP CONSTRAINT "FK_5ed9c8937635b255539d31b2cce"`);
        await queryRunner.query(`DROP INDEX "IDX_a2ac49e2f3fdb768c7d7b53d69"`);
        await queryRunner.query(`DROP INDEX "IDX_fceebcdbf7044125911f950b83"`);
        await queryRunner.query(`DROP TABLE "organization_administrators_user"`);
        await queryRunner.query(`DROP TABLE "organization"`);
        await queryRunner.query(`DROP TABLE "project"`);
        await queryRunner.query(`DROP TABLE "page"`);
        await queryRunner.query(`DROP TABLE "section"`);
        await queryRunner.query(`DROP TABLE "tag"`);
    }

}
