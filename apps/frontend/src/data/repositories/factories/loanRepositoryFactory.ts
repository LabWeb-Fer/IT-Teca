
// apps/frontend/src/data/repositories/factories/loanRepositoryFactory.ts

import { InMemoryLoanRepository } from '../repositories/InMemoryLoanRepository';
import { ApiLoanRepository } from '../repositories/ApiLoanRepository';

export const createLoanRepository = () => {
  return import.meta.env.VITE_USE_API === 'true'
    ? new ApiLoanRepository()
    : new InMemoryLoanRepository();
};
