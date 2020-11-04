import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class CriarTabelaLocalEntrega1604486398174 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
          name: "localentrega",
          columns: [
            {
              name: "id",
              type: "int",
              isPrimary: true,
              isGenerated: true,
              generationStrategy: "increment"
            },
            {
              name: "descricao",
              type: "varchar",
            },
            {
              name: "create_at",
              type: "timestamp",
              default: "now()"
            },
            {
              name: "update_at",
              type: "timestamp",
              default: "now()"
            }
          ]
        }), true);
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("localentrega");
        await queryRunner.dropUniqueConstraints;
        await queryRunner.dropIndices;
        await queryRunner.dropTable("localentrega");
      }

}
