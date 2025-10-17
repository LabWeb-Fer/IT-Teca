import { User } from "domain/src/entities/User";
import { type UserRepository } from "domain/src/use-cases/register-user/UserRepository";

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  // async save(user: User): Promise<void> {
  //   this.users.push(user);
  // }
  async save(user: User): Promise<void> {
  const index = this.users.findIndex(u => u.id === user.id);
    if (index >= 0) {
      this.users[index] = user;
    } else {
      this.users.push(user);
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(u => u.email === email) ?? null;
  }

  async findById(id: string): Promise<User | null> {
    return this.users.find(u => u.id === id) ?? null;
  }
}
