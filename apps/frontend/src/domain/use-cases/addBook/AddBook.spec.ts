import { describe, it, expect, beforeEach } from 'vitest';
import { InMemoryBookRepository } from '../../../data/repositories/InMemoryBookRepository';
import { Book } from '../../entities/Book';

describe('AddBook Use Case', () => {
  let bookRepo: InMemoryBookRepository;

  beforeEach(() => {
    bookRepo = new InMemoryBookRepository();
  });

  it('should add a book successfully', async () => {
    const book: Book = {
      id: '1',
      title: 'Book 1',
      author: 'Author 1',
    };
    await bookRepo.addBook(book);

    const books = await bookRepo.getAll();
    expect(books.length).toBe(1);
    expect(books[0]).toEqual(book);
  });

  it('should get a book by id', async () => {
    const book: Book = {
      id: '2',
      title: 'Book 2',
      author: 'Author 2',
    };
    await bookRepo.addBook(book);

    const foundBook = await bookRepo.getById('2');
    expect(foundBook).not.toBeNull();
    expect(foundBook).toEqual(book);
  });

  it('should return null if book id does not exist', async () => {
    const foundBook = await bookRepo.getById('999');
    expect(foundBook).toBeNull();
  });
});
