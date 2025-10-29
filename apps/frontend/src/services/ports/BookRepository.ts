// src/services/ports/BookRepository.ts
import type { Book } from "../booksService";

export interface IBookRepository {
  getAll(): Promise<Book[]>;
  add(book: Book): Promise<void>;
}
