import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
import { User } from '../../models/user';

export class CriarUserAdmin1601946654299 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    let user = new User();
    user.username = "admin";
    user.password = "admin";
    user.role = "ADMIN";
    const userRepository = getRepository(User);
    await userRepository.save(user);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`delete from users where username = 'admin'`);
  }

}
