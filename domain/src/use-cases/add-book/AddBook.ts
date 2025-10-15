import { Book } from "../../entities/Book";
import { type BookRepository } from "./BookRepository";

interface AddBookRequest {
  title: string;
  author: string;
  isbn: string;
}

export class AddBook {
  constructor(private bookRepo: BookRepository) {}

  async execute(request: AddBookRequest): Promise<Book> {
    const existing = await this.bookRepo.findByISBN(request.isbn);
    if (existing) {
      throw new Error("Book with this ISBN already exists");
    }

    const book = new Book(
      crypto.randomUUID(),
      request.title,
      request.author,
      request.isbn
    );

    await this.bookRepo.save(book);
    return book;
  }
}
