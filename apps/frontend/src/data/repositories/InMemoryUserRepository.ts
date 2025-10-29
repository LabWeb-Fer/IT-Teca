
//frontend/src/data/repositories/InMemoryUserRepository.ts

import { User } from '../../domain/entities/User';
import { UserRepository } from '../../domain/use-cases/registerUser/UserRepository';

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  async addUser(user: User): Promise<void> {
    this.users.push(user);
  }

  async getAll(): Promise<User[]> {
    return [...this.users];
  }

  async getById(id: string): Promise<User | null> {
    const user = this.users.find(u => u.id === id);
    return user ? { ...user } : null;
  }

  async clear(): Promise<void> {
    this.users = [];
  }
}
