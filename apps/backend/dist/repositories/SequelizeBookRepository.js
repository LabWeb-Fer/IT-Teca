// apps/backend/src/repositories/SequelizeBookRepository.ts
import { Book } from '../../../../domain/src/entities/Book';
import {} from '../../../../domain/src/use-cases/add-book/BookRepository';
import { BookModel } from '../models/BookModel';
export class SequelizeBookRepository {
    async findById(id) {
        const bookRecord = await BookModel.findByPk(id);
        if (!bookRecord)
            return null;
        return new Book(bookRecord.id, bookRecord.title, bookRecord.author, bookRecord.isbn, bookRecord.available);
    }
    async save(book) {
        await BookModel.upsert({
            id: book.id,
            title: book.title,
            author: book.author,
            isbn: book.isbn,
            available: book.isAvailable,
        });
    }
    async findAll() {
        const bookRecords = await BookModel.findAll();
        return bookRecords.map((bookRecord) => new Book(bookRecord.id, bookRecord.title, bookRecord.author, bookRecord.isbn, bookRecord.available));
    }
    async findByISBN(isbn) {
        const bookRecord = await BookModel.findOne({ where: { isbn } });
        if (!bookRecord)
            return null;
        return new Book(bookRecord.id, bookRecord.title, bookRecord.author, bookRecord.isbn, bookRecord.available);
    }
}
//# sourceMappingURL=SequelizeBookRepository.js.map