import { EntityRepository, Repository } from 'typeorm';
import { User } from '../models/user';

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  public async findByUserName(username: string): Promise<User[]> {
    return this.find({
      where: {
        username,
      },
    });
  }
}