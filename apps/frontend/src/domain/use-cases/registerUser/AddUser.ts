import { User } from '../../entities/User';
import { UserRepository } from './UserRepository';

export class AddUser {
  constructor(private userRepository: UserRepository) {}

  async execute(user: User) {
    if (!user.name || !user.email) {
      throw new Error('Name and email are required');
    }
    await this.userRepository.addUser(user);
  }

  async listUsers(): Promise<User[]> {
    return this.userRepository.getUsers();
  }
}
