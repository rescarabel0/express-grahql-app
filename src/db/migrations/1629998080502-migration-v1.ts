import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationV11629998080502 implements MigrationInterface {
    name = 'migrationV11629998080502'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`graphql_app\`.\`Dog\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, \`raca\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`graphql_app\`.\`Dog\``);
    }

}
