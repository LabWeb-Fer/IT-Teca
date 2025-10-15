import { describe, it, expect } from 'vitest';
import { User } from '../../entities/User';
import { RegisterUser } from './RegisterUser';
import { type UserRepository } from './UserRepository';


class InMemoryUserRepo implements UserRepository {
  private users: User[] = [];

  async save(user: User): Promise<void> {
    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(u => u.email === email) ?? null;
  }

  async findById(id: string): Promise<User | null> {
    return this.users.find(u => u.id === id) ?? null;
  }
}



describe('RegisterUser', () => {
  it('should register a new user', async () => {
    const repo = new InMemoryUserRepo();
    const registerUser = new RegisterUser(repo);

    const result = await registerUser.execute({
      email: 'fernando@example.com',
      password: 'securepass123',
      role: 'lector'
    });

    expect(result).toBeInstanceOf(User);
    expect(result.email).toBe('fernando@example.com');
    expect(result.password).toBe('securepass123'); // o hashed
    expect(result.role).toBe('lector');
    expect(result.id).toBeDefined();
  });

  it('should not allow duplicate email', async () => {
    const repo = new InMemoryUserRepo();
    const registerUser = new RegisterUser(repo);

    await registerUser.execute({
      email: 'fernando@example.com',
      password: '123',
      role: 'lector'
    });

    await expect(() =>
      registerUser.execute({
        email: 'fernando@example.com',
        password: '456',
        role: 'admin'
      })
    ).rejects.toThrow("User already exists");
  });
});
