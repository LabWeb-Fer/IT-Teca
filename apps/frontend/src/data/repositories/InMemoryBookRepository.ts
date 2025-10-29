import { Book } from '../../domain/entities/Book';
import { BookRepository } from '../../domain/use-cases/addBook/BookRepository';

export class InMemoryBookRepository implements BookRepository {
  private books: Book[] = [];

  async addBook(book: Book): Promise<void> {
    this.books.push(book);
  }

  async getAll(): Promise<Book[]> {
    return [...this.books];
  }

  async getById(id: string): Promise<Book | null> {
    const book = this.books.find(b => b.id === id);
    return book ? { ...book } : null;
  }

  async clear(): Promise<void> {
    this.books = [];
  }
}
