import { User } from "domain/src/entities/User";
import {} from "domain/src/use-cases/register-user/UserRepository";
export class InMemoryUserRepository {
    constructor() {
        this.users = [];
    }
    async save(user) {
        const index = this.users.findIndex(u => u.id === user.id);
        if (index >= 0) {
            this.users[index] = user;
        }
        else {
            this.users.push(user);
        }
    }
    async findByEmail(email) {
        return this.users.find(u => u.email === email) ?? null;
    }
    async findById(id) {
        return this.users.find(u => u.id === id) ?? null;
    }
}
//# sourceMappingURL=InMemoryUserRepository.js.map