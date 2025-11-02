import { useState } from 'react';
import { InMemoryUserRepository } from '../../data/repositories/InMemoryUserRepository';
import { AddUser } from '../../domain/use-cases/registerUser/AddUser';
import type { User } from '../../domain/entities/User';

const userRepo = new InMemoryUserRepository();
const addUserUseCase = new AddUser(userRepo);

export function useUser() {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = async (user: User) => {
    await addUserUseCase.execute(user);
    const updatedUsers = await addUserUseCase.listUsers();
    setUsers(updatedUsers);
  };

  const loadUsers = async () => {
    const currentUsers = await addUserUseCase.listUsers();
    setUsers(currentUsers);
  };

  return { users, addUser, loadUsers };
}
