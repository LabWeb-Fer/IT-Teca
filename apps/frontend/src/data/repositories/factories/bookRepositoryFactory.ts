import { InMemoryBookRepository } from '../InMemoryBookRepository';
import { ApiBookRepository } from '../ApiBookRepository';

export const createBookRepository = () => {
  return import.meta.env.VITE_USE_API === 'true'
    ? new ApiBookRepository()
    : new InMemoryBookRepository();
};
