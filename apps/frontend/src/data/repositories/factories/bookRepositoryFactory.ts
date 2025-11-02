import { InMemoryBookRepository } from '../repositories/InMemoryBookRepository';
import { ApiBookRepository } from '../repositories/ApiBookRepository';

export const createBookRepository = () => {
  return import.meta.env.VITE_USE_API === 'true'
    ? new ApiBookRepository()
    : new InMemoryBookRepository();
};
