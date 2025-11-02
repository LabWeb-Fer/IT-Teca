
// apps/frontend/src/presentation/hooks/useUser.ts

import { useState } from 'react';
import { ApiUserRepository } from '../../data/repositories/ApiUserRepository';
import { AddUser } from '../../domain/use-cases/registerUser/AddUser';
import type { User } from '../../domain/entities/User';

const userRepo = new ApiUserRepository();
const addUserUseCase = new AddUser(userRepo);

export function useUser() {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = async (user: User) => {
    await addUserUseCase.execute(user);
    const updatedUsers = await userRepo.getUsers();
    setUsers(updatedUsers);
  };

  const loadUsers = async () => {
    const currentUsers = await userRepo.getUsers();
    setUsers(currentUsers);
  };

  return { users, addUser, loadUsers };
}
