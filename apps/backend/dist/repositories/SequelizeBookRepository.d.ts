import { Book } from '../../../../domain/src/entities/Book';
import { type BookRepository } from '../../../../domain/src/use-cases/add-book/BookRepository';
export declare class SequelizeBookRepository implements BookRepository {
    findById(id: string): Promise<Book | null>;
    save(book: Book): Promise<void>;
    findAll(): Promise<Book[]>;
    findByISBN(isbn: string): Promise<Book | null>;
}
//# sourceMappingURL=SequelizeBookRepository.d.ts.map