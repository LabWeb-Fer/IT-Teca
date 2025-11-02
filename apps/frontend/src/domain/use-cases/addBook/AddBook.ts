
//src/domain/use-cases/addBook/AddBook.ts

import type { Book } from '../../entities/Book';
import type { BookRepository } from './BookRepository';

export class AddBook {
  constructor(private bookRepository: BookRepository) {}

  async execute(book: Book) {
    if (!book.title || !book.author) {
      throw new Error('Title and author are required');
    }
    await this.bookRepository.addBook(book);
  }

  async listBooks(): Promise<Book[]> {
    //return this.bookRepository.getBooks();
    return await this.bookRepository.getAll();

  }
}
