import { Book } from "../../entities/Book";
import {} from "./BookRepository";
export class AddBook {
    constructor(bookRepo) {
        this.bookRepo = bookRepo;
    }
    async execute(request) {
        const existing = await this.bookRepo.findByISBN(request.isbn);
        if (existing) {
            throw new Error("Book with this ISBN already exists");
        }
        const book = new Book(crypto.randomUUID(), request.title, request.author, request.isbn);
        await this.bookRepo.save(book);
        return book;
    }
}
//# sourceMappingURL=AddBook.js.map