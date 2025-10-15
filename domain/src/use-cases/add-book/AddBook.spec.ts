import { describe, it, expect } from 'vitest';
import { AddBook } from './AddBook';
import { Book } from '../../entities/Book';
import  { type BookRepository } from './BookRepository';

class InMemoryBookRepo implements BookRepository {
  private books: Book[] = [];

  async save(book: Book): Promise<void> {
    this.books.push(book);
  }

  async findByISBN(isbn: string): Promise<Book | null> {
    return this.books.find(b => b.isbn === isbn) ?? null;
  }
}

describe('AddBook', () => {
  it('should add a new book', async () => {
    const repo = new InMemoryBookRepo();
    const addBook = new AddBook(repo);

    const result = await addBook.execute({
      title: "Clean Code",
      author: "Robert C. Martin",
      isbn: "9780132350884"
    });

    expect(result).toBeInstanceOf(Book);
    expect(result.title).toBe("Clean Code");
    expect(result.isAvailable).toBe(true);
  });

  it('should not add duplicate ISBN', async () => {
    const repo = new InMemoryBookRepo();
    const addBook = new AddBook(repo);

    await addBook.execute({
      title: "Book 1",
      author: "Author",
      isbn: "123"
    });

    await expect(() => addBook.execute({
      title: "Book 2",
      author: "Author",
      isbn: "123"
    })).rejects.toThrow("Book with this ISBN already exists");
  });
});
