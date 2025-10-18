import { describe, it, expect, beforeEach } from 'vitest';
import { LoanBook } from './LoanBook';
import { Book } from '../../entities/Book';
import { User } from '../../entities/User';
import { Loan } from '../../entities/Loan';
import { type BookRepository } from '../add-book/BookRepository';
import { type UserRepository } from '../register-user/UserRepository';
import { type LoanRepository } from './LoanRepository';

class InMemoryBookRepo implements BookRepository {
  private books: Book[] = [];

  async save(book: Book): Promise<void> {
    const index = this.books.findIndex(b => b.id === book.id);
    if (index >= 0) this.books[index] = book;
    else this.books.push(book);
  }

  async findByISBN(): Promise<Book | null> {
    return null;
  }

  async findById(id: string): Promise<Book | null> {
    return this.books.find(b => b.id === id) ?? null;
  }
}

class InMemoryUserRepo implements UserRepository {
  private users: User[] = [];

  async save(user: User): Promise<void> {
    this.users.push(user);
  }

  async findByEmail(): Promise<User | null> {
    return null;
  }

  async findById(id: string): Promise<User | null> {
    return this.users.find(u => u.id === id) ?? null;
  }
}

class InMemoryLoanRepo implements LoanRepository {
  private loans: Loan[] = [];

  async save(loan: Loan): Promise<void> {
    this.loans.push(loan);
  }
}

describe('LoanBook', () => {
  let loanBook: LoanBook;
  let bookRepo: InMemoryBookRepo;
  let userRepo: InMemoryUserRepo;
  let loanRepo: InMemoryLoanRepo;

  beforeEach(() => {
    bookRepo = new InMemoryBookRepo();
    userRepo = new InMemoryUserRepo();
    loanRepo = new InMemoryLoanRepo();
    loanBook = new LoanBook(userRepo, bookRepo, loanRepo);
  });

  it('should loan a book to a user', async () => {
    const book = new Book("book-1", "Clean Code", "Uncle Bob", "1234567890");
    const user = new User("user-1", "user@example.com", "pass", "lector");

    await bookRepo.save(book);
    await userRepo.save(user);

    const result = await loanBook.execute({
      userId: user.id,
      bookId: book.id
    });

    expect(result).toBeInstanceOf(Loan);
    expect(result.bookId).toBe(book.id);
    expect(result.userId).toBe(user.id);
    expect(result.isReturned()).toBe(false);
    expect(book.isAvailable).toBe(false); // El libro debe quedar prestado
  });
});
