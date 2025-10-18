import { Book } from "../../entities/Book";
import { type BookRepository } from "./BookRepository";
interface AddBookRequest {
    title: string;
    author: string;
    isbn: string;
}
export declare class AddBook {
    private bookRepo;
    constructor(bookRepo: BookRepository);
    execute(request: AddBookRequest): Promise<Book>;
}
export {};
//# sourceMappingURL=AddBook.d.ts.map