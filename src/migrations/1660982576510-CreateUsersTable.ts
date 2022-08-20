import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUsersTable1660982576510 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'users',
              columns: [
                {
                  name: 'id',
                  type: 'int',
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: 'increment',
                },
                {
                  name: 'email',
                  type: 'varchar',
                  isNullable: false,
                },
                {
                  name: 'password',
                  type: 'varchar',
                  isNullable: false,
                },
              ],
            }),
            false,
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
