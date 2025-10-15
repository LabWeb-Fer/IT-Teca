import { User } from "domain/src/entities/User";
import { UserRepository } from "domain/src/use-cases/register-user/UserRepository";
export class InMemoryUserRepository {
    constructor() {
        this.users = [];
    }
    async save(user) {
        this.users.push(user);
    }
    async findByEmail(email) {
        return this.users.find(u => u.email === email) ?? null;
    }
    async findById(id) {
        return this.users.find(u => u.id === id) ?? null;
    }
}
