
// apps/backend/src/repositories/SequelizeUserRepository.ts

import { User } from '../../../../domain/src/entities/User';
import { type UserRepository } from '../../../../domain/src/use-cases/register-user/UserRepository';
import { UserModel } from '../models/UserModel';

export class SequelizeUserRepository implements UserRepository {
  async findById(id: string): Promise<User | null> {
    const userRecord = await UserModel.findByPk(id);
    if (!userRecord) return null;

    return new User(
      userRecord.id,
      userRecord.email,
      userRecord.password,
      userRecord.role
    );
  }

  async findByEmail(email: string): Promise<User | null> {
    const userRecord = await UserModel.findOne({ where: { email } });
    if (!userRecord) return null;

    return new User(
      userRecord.id,
      userRecord.email,
      userRecord.password,
      userRecord.role
    );
  }

  async save(user: User): Promise<void> {
    await UserModel.upsert({
      id: user.id,
      email: user.email,
      password: user.password,
      role: user.role,
    });
  }

  async findAll(): Promise<User[]> {
    const userRecords = await UserModel.findAll();
    return userRecords.map(
      (user) =>
        new User(
          user.id,
          user.email,
          user.password,
          user.role
        )
    );
  }
}
