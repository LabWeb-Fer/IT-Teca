export declare class Book {
    readonly id: string;
    title: string;
    author: string;
    isbn: string;
    private _isAvailable;
    constructor(id: string, title: string, author: string, isbn: string, _isAvailable?: boolean);
    get isAvailable(): boolean;
    lend(): void;
    markAsReturned(): void;
}
//# sourceMappingURL=Book.d.ts.map