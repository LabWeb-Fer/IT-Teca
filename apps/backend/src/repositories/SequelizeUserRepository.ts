// apps/backend/src/repositories/SequelizeUserRepository.ts
import { User } from '../../../domain/src/entities/User';
import { type UserRepository } from '../../../../domain/src/use-cases/user-registration/UserRepository';
import { UserModel } from '../models/UserModel';

export class SequelizeUserRepository implements UserRepository {
  async findById(id: string): Promise<User | null> {
    const userRecord = await UserModel.findByPk(id);
    if (!userRecord) return null;

    return new User(
      userRecord.id,
      userRecord.name,
      userRecord.email,
      userRecord.role
    );
  }

  async findByEmail(email: string): Promise<User | null> {
    const userRecord = await UserModel.findOne({ where: { email } });
    if (!userRecord) return null;

    return new User(
      userRecord.id,
      userRecord.name,
      userRecord.email,
      userRecord.role
    );
  }

  async save(user: User): Promise<void> {
    await UserModel.upsert({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  }
}
