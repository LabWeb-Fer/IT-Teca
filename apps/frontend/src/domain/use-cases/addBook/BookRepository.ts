// domain/use-cases/addBook/BookRepository.ts
import type { Book } from '../../entities/Book';

export interface BookRepository {
  addBook(book: Book): Promise<void>;
  getBooks(): Promise<Book[]>;
}
