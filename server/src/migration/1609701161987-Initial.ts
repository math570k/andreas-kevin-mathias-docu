import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1609701161987 implements MigrationInterface {
    name = 'Initial1609701161987'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tag" ("id" SERIAL NOT NULL, "title" text NOT NULL, "projectId" integer, CONSTRAINT "PK_8e4052373c579afc1471f526760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "section" ("id" SERIAL NOT NULL, "title" text NOT NULL, "content" text NOT NULL, "order" integer NOT NULL, "pageId" integer, CONSTRAINT "PK_3c41d2d699384cc5e8eac54777d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "page" ("id" SERIAL NOT NULL, "title" text NOT NULL, "content" text, "order" integer, "projectId" integer, CONSTRAINT "PK_742f4117e065c5b6ad21b37ba1f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "project" ("id" SERIAL NOT NULL, "color" text NOT NULL, "title" text NOT NULL, "description" text NOT NULL, "content" text NOT NULL, "organizationId" integer, CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" text NOT NULL, "password" text NOT NULL, "firstName" text NOT NULL, "lastName" text NOT NULL, "tokenVersion" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "organization" ("id" SERIAL NOT NULL, "name" text NOT NULL, "logo" text NOT NULL, CONSTRAINT "PK_472c1f99a32def1b0abb219cd67" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "organization_users_user" ("organizationId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_a0057ab2ced35777f00eaaa9673" PRIMARY KEY ("organizationId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_e1e28e472b43bbad7ff3cecdcd" ON "organization_users_user" ("organizationId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a02d820429038dce37d18f74b6" ON "organization_users_user" ("userId") `);
        await queryRunner.query(`CREATE TABLE "organization_admins_user" ("organizationId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_8ac851f772ff62080bb9eda49d0" PRIMARY KEY ("organizationId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_3828b2c3774b39526bdd54c6ae" ON "organization_admins_user" ("organizationId") `);
        await queryRunner.query(`CREATE INDEX "IDX_8b7c9540e4f68211dc89bf7663" ON "organization_admins_user" ("userId") `);
        await queryRunner.query(`ALTER TABLE "tag" ADD CONSTRAINT "FK_5ed9c8937635b255539d31b2cce" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "section" ADD CONSTRAINT "FK_73a502c62159d28900594ba710e" FOREIGN KEY ("pageId") REFERENCES "page"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "page" ADD CONSTRAINT "FK_2d80076945d659dc90bbd11865a" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "project" ADD CONSTRAINT "FK_0028dfadf312a1d7f51656c4a9a" FOREIGN KEY ("organizationId") REFERENCES "organization"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "organization_users_user" ADD CONSTRAINT "FK_e1e28e472b43bbad7ff3cecdcdd" FOREIGN KEY ("organizationId") REFERENCES "organization"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "organization_users_user" ADD CONSTRAINT "FK_a02d820429038dce37d18f74b68" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "organization_admins_user" ADD CONSTRAINT "FK_3828b2c3774b39526bdd54c6ae3" FOREIGN KEY ("organizationId") REFERENCES "organization"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "organization_admins_user" ADD CONSTRAINT "FK_8b7c9540e4f68211dc89bf76635" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "organization_admins_user" DROP CONSTRAINT "FK_8b7c9540e4f68211dc89bf76635"`);
        await queryRunner.query(`ALTER TABLE "organization_admins_user" DROP CONSTRAINT "FK_3828b2c3774b39526bdd54c6ae3"`);
        await queryRunner.query(`ALTER TABLE "organization_users_user" DROP CONSTRAINT "FK_a02d820429038dce37d18f74b68"`);
        await queryRunner.query(`ALTER TABLE "organization_users_user" DROP CONSTRAINT "FK_e1e28e472b43bbad7ff3cecdcdd"`);
        await queryRunner.query(`ALTER TABLE "project" DROP CONSTRAINT "FK_0028dfadf312a1d7f51656c4a9a"`);
        await queryRunner.query(`ALTER TABLE "page" DROP CONSTRAINT "FK_2d80076945d659dc90bbd11865a"`);
        await queryRunner.query(`ALTER TABLE "section" DROP CONSTRAINT "FK_73a502c62159d28900594ba710e"`);
        await queryRunner.query(`ALTER TABLE "tag" DROP CONSTRAINT "FK_5ed9c8937635b255539d31b2cce"`);
        await queryRunner.query(`DROP INDEX "IDX_8b7c9540e4f68211dc89bf7663"`);
        await queryRunner.query(`DROP INDEX "IDX_3828b2c3774b39526bdd54c6ae"`);
        await queryRunner.query(`DROP TABLE "organization_admins_user"`);
        await queryRunner.query(`DROP INDEX "IDX_a02d820429038dce37d18f74b6"`);
        await queryRunner.query(`DROP INDEX "IDX_e1e28e472b43bbad7ff3cecdcd"`);
        await queryRunner.query(`DROP TABLE "organization_users_user"`);
        await queryRunner.query(`DROP TABLE "organization"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "project"`);
        await queryRunner.query(`DROP TABLE "page"`);
        await queryRunner.query(`DROP TABLE "section"`);
        await queryRunner.query(`DROP TABLE "tag"`);
    }

}
