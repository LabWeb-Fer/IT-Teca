import { Book } from "../../entities/Book";

export interface BookRepository {
  save(book: Book): Promise<void>;
  findByISBN(isbn: string): Promise<Book | null>;
}
