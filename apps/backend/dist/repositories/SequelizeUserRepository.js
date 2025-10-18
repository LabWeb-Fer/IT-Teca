// apps/backend/src/repositories/SequelizeUserRepository.ts
import { User } from '../../../../domain/src/entities/User';
import {} from '../../../../domain/src/use-cases/register-user/UserRepository';
import { UserModel } from '../models/UserModel';
export class SequelizeUserRepository {
    async findById(id) {
        const userRecord = await UserModel.findByPk(id);
        if (!userRecord)
            return null;
        return new User(userRecord.id, userRecord.email, userRecord.password, userRecord.role);
    }
    async findByEmail(email) {
        const userRecord = await UserModel.findOne({ where: { email } });
        if (!userRecord)
            return null;
        return new User(userRecord.id, userRecord.email, userRecord.password, userRecord.role);
    }
    async save(user) {
        await UserModel.upsert({
            id: user.id,
            email: user.email,
            password: user.password,
            role: user.role,
        });
    }
    async findAll() {
        const userRecords = await UserModel.findAll();
        return userRecords.map((user) => new User(user.id, user.email, user.password, user.role));
    }
}
//# sourceMappingURL=SequelizeUserRepository.js.map