// apps/backend/src/repositories/SequelizeBookRepository.ts
import { Book } from '../../../../domain/src/entities/Book';
import { type BookRepository } from '../../../../domain/src/use-cases/add-book/BookRepository';
import { BookModel } from '../models/BookModel';

export class SequelizeBookRepository implements BookRepository {
  async findById(id: string): Promise<Book | null> {
    const bookRecord = await BookModel.findByPk(id);
    if (!bookRecord) return null;

    return new Book(
      bookRecord.id,
      bookRecord.title,
      bookRecord.author,
      bookRecord.isbn,
      bookRecord.available
    );
  }

  async save(book: Book): Promise<void> {
    await BookModel.upsert({
      id: book.id,
      title: book.title,
      author: book.author,
      isbn: book.isbn,
      available: book.available,
    });
  }
}
