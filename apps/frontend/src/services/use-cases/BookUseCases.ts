// src/services/use-cases/BookUseCases.ts

// //import { IBookRepository } from "../ports/BookRepository";
// import type { IBookRepository } from "../ports/BookRepository";
// import type { Book } from "../booksService";

// export class BookUseCases {
//   constructor(private repo: IBookRepository) {}

//   async getBooks(): Promise<Book[]> {
//     return this.repo.getAll();
//   }

//   async addBook(book: Book): Promise<void> {
//     await this.repo.add(book);
//   }
// }
import type { Book } from "../booksService";
import type { BookService } from "../booksService";

export class BookUseCases {
  constructor(private readonly bookRepo: BookService) {}

  async getBooks(): Promise<Book[]> {
    return this.bookRepo.getAllBooks();
  }

  async addBook(book: Book): Promise<void> {
    return this.bookRepo.addBook(book);
  }
}
