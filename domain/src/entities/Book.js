export class Book {
    constructor(id, title, author, isbn, _isAvailable = true) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this._isAvailable = _isAvailable;
    }
    get isAvailable() {
        return this._isAvailable;
    }
    lend() {
        if (!this._isAvailable) {
            throw new Error('Book is already lent');
        }
        this._isAvailable = false;
    }
    markAsReturned() {
        this._isAvailable = true;
    }
}
//# sourceMappingURL=Book.js.map