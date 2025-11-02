
// apps/frontend/src/data/repositories/factories/userRepositoryFactory.ts

import { InMemoryUserRepository } from '../repositories/InMemoryUserRepository';
import { ApiUserRepository } from '../repositories/ApiUserRepository';

export const createUserRepository = () => {
  return import.meta.env.VITE_USE_API === 'true'
    ? new ApiUserRepository()
    : new InMemoryUserRepository();
};
