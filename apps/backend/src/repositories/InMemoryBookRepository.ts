import { Book } from "domain/src/entities/Book";
import { BookRepository } from "domain/src/use-cases/add-book/BookRepository";

export class InMemoryBookRepository implements BookRepository {
    private books: Book[] = [];

    async findByISBN(isbn: string): Promise < Book | null > {
        return this.books.find(b => b.isbn === isbn) ? ? null;
    }

    async save(book: Book): Promise < void > {
        const index = this.books.findIndex(b => b.id === book.id);
        if (index >= 0) {
            this.books[index] = book;
        } else {
            this.books.push(book);
        }
    }

    async findById(id: string): Promise < Book | null > {
        return this.books.find(b => b.id === id) ? ? null;
    }
}