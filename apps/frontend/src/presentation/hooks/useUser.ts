
// apps/frontend/src/presentation/hooks/useUser.ts

import { useState } from 'react';
import { createUserRepository } from '../../data/repositories/factories/userRepositoryFactory'; 
import { ApiUserRepository } from '../../data/repositories/ApiUserRepository';
import { AddUser } from '../../domain/use-cases/registerUser/AddUser';
//import { ListUsers } from '../../domain/use-cases/listUsers/ListUsers';
import type { User } from '../../domain/entities/User';

//const userRepo = new ApiUserRepository();
const userRepo = createUserRepository();
const addUserUseCase = new AddUser(userRepo);
//const listUsersUseCase = new ListUsers(userRepo); 

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

  // const loadUsers = async () => {
  //   const currentUsers = await listUsersUseCase.execute(); 
  //   setUsers(currentUsers);
  // };

  return { users, addUser, loadUsers };
}
