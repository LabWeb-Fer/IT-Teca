import { Book } from "domain/src/entities/Book";
import { BookRepository } from "domain/src/use-cases/add-book/BookRepository";
export class InMemoryBookRepository {
    constructor() {
        this.books = [];
    }
    async findByISBN(isbn) {
        return this.books.find(b => b.isbn === isbn) ?? null;
    }
    async save(book) {
        const index = this.books.findIndex(b => b.id === book.id);
        if (index >= 0) {
            this.books[index] = book;
        }
        else {
            this.books.push(book);
        }
    }
    async findById(id) {
        return this.books.find(b => b.id === id) ?? null;
    }
}
//# sourceMappingURL=InMemoryBookRepository.js.map