export class Book {
    constructor(
        public readonly id: string,
        public title: string,
        public author: string,
        public isbn: string,
        private _isAvailable: boolean = true
    ) {}

    get isAvailable(): boolean {
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