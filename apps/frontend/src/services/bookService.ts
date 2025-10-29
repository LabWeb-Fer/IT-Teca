
// src/services/bookService.ts
export interface Book {
  id: string;
  title: string;
  author: string;
  available: boolean;
}

export interface BookService {
  getAllBooks(): Promise<Book[]>;
}

// Mock de servicio (para Storybook / desarrollo visual)
export const mockBookService: BookService = {
  async getAllBooks() {
    return Promise.resolve([
      { id: "1", title: "El Principito", author: "Antoine de Saint-Exupéry", available: true },
      { id: "2", title: "1984", author: "George Orwell", available: false },
      { id: "3", title: "Cien años de soledad", author: "Gabriel García Márquez", available: true },
    ]);
  },
};
