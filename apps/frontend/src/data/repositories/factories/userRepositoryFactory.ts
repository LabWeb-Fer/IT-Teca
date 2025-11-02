
// apps/frontend/src/data/repositories/factories/userRepositoryFactory.ts

import { InMemoryUserRepository } from '../InMemoryUserRepository';
import { ApiUserRepository } from '../ApiUserRepository';

export const createUserRepository = () => {
  return import.meta.env.VITE_USE_API === 'true'
    ? new ApiUserRepository()
    : new InMemoryUserRepository();
};
