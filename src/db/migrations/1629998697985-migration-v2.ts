import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationV21629998697985 implements MigrationInterface {
    name = 'migrationV21629998697985'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`graphql_app\`.\`Dog\` CHANGE \`id\` \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`graphql_app\`.\`Dog\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`graphql_app\`.\`Dog\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`graphql_app\`.\`Dog\` ADD \`id\` varchar(255) NOT NULL PRIMARY KEY`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`graphql_app\`.\`Dog\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`graphql_app\`.\`Dog\` ADD \`id\` int NOT NULL AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`graphql_app\`.\`Dog\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`graphql_app\`.\`Dog\` CHANGE \`id\` \`id\` int NOT NULL AUTO_INCREMENT`);
    }

}
