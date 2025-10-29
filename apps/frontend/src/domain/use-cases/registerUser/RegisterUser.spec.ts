
//frontend/domain/use-cases/registerUser/RegisterUser.spec.ts

import { describe, it, expect, beforeEach } from 'vitest';
import { InMemoryUserRepository } from '../../../data/repositories/InMemoryUserRepository';
import { User } from '../../entities/User';

describe('RegisterUser Use Case', () => {
  let userRepo: InMemoryUserRepository;

  beforeEach(() => {
    userRepo = new InMemoryUserRepository();
  });

  it('should add a user successfully', async () => {
    const user: User = {
      id: '1',
      name: 'User 1',
      email: 'user1@example.com',
    };
    await userRepo.addUser(user);

    const users = await userRepo.getAll();
    expect(users.length).toBe(1);
    expect(users[0]).toEqual(user);
  });

  it('should get a user by id', async () => {
    const user: User = {
      id: '2',
      name: 'User 2',
      email: 'user2@example.com',
    };
    await userRepo.addUser(user);

    const foundUser = await userRepo.getById('2');
    expect(foundUser).not.toBeNull();
    expect(foundUser).toEqual(user);
  });

  it('should return null if user id does not exist', async () => {
    const foundUser = await userRepo.getById('999');
    expect(foundUser).toBeNull();
  });
});
