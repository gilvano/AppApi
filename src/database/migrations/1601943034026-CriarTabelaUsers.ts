import {MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class CriarTabelaUsers1601943034026 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "users",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: "increment"
        },
        {
          name: "username",
          type: "varchar",
          isUnique: true
        },
        {
          name: "password",
          type: "varchar",
        },
        {
          name: "role",
          type: "varchar",
          isNullable: false
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
    const table = await queryRunner.getTable("users");
    await queryRunner.dropUniqueConstraints;
    await queryRunner.dropIndices;
    await queryRunner.dropTable("users");
  }

}
