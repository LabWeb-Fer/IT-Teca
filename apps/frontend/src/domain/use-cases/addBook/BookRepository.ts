// domain/use-cases/addBook/BookRepository.ts
import { Book } from '../../entities/Book';

export interface BookRepository {
  addBook(book: Book): Promise<void>;
  getBooks(): Promise<Book[]>;
}
