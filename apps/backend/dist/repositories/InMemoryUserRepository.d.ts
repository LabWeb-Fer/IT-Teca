import { User } from "domain/src/entities/User";
import { type UserRepository } from "domain/src/use-cases/register-user/UserRepository";
export declare class InMemoryUserRepository implements UserRepository {
    private users;
    save(user: User): Promise<void>;
    findByEmail(email: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
}
//# sourceMappingURL=InMemoryUserRepository.d.ts.map