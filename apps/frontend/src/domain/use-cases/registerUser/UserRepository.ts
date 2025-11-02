
// frontend/src/domain/use-cases/registerUser/UserRepository.ts

import type { User } from '../../entities/User';

export interface UserRepository {
  addUser(user: User): Promise<void>;
  getUsers(): Promise<User[]>;
  getUserById(id: string): Promise<User | null>;
}
