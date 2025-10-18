import { Book } from "domain/src/entities/Book";
import { BookRepository } from "domain/src/use-cases/add-book/BookRepository";
export declare class InMemoryBookRepository implements BookRepository {
    private books;
    findByISBN(isbn: string): Promise<Book | null>;
    save(book: Book): Promise<void>;
    findById(id: string): Promise<Book | null>;
}
//# sourceMappingURL=InMemoryBookRepository.d.ts.map