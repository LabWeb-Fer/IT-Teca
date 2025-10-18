import { User } from '../../../../domain/src/entities/User';
import { type UserRepository } from '../../../../domain/src/use-cases/register-user/UserRepository';
export declare class SequelizeUserRepository implements UserRepository {
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    save(user: User): Promise<void>;
    findAll(): Promise<User[]>;
}
//# sourceMappingURL=SequelizeUserRepository.d.ts.map