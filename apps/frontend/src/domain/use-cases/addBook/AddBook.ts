
//src/domain/use-cases/addBook/AddBook.ts

import { Book } from '../../entities/Book';
import { BookRepository } from './BookRepository';

export class AddBook {
  constructor(private bookRepository: BookRepository) {}

  async execute(book: Book) {
    if (!book.title || !book.author) {
      throw new Error('Title and author are required');
    }
    await this.bookRepository.addBook(book);
  }

  async listBooks(): Promise<Book[]> {
    return this.bookRepository.getBooks();
  }
}
