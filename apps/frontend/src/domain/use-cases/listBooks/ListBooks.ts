
// src/domain/use-cases/listBooks/ListBooks.ts

import type { Book } from '../../entities/Book';
import type { BookRepository } from '../addBook/BookRepository';

export class ListBooks {
  constructor(private bookRepository: BookRepository) {}

  async execute(): Promise<Book[]> {
    return await this.bookRepository.getAll();
  }
}
