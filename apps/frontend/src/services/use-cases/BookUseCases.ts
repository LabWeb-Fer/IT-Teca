// src/services/use-cases/BookUseCases.ts

// //import { IBookRepository } from "../ports/BookRepository";
// import type { IBookRepository } from "../ports/BookRepository";
// import type { Book } from "../booksService";

// export class BookUseCases {
//   constructor(private repo: IBookRepository) {}

//   async getBooks(): Promise<Book[]> {
//     return this.repo.getAll();
//   }

//   async addBook(book: Book): Promise<void> {
//     await this.repo.add(book);
//   }
// }
// import type { Book } from "../booksService";
// import type { BookService } from "../booksService";

// export class BookUseCases {
//   constructor(private readonly bookRepo: BookService) {}

//   async getBooks(): Promise<Book[]> {
//     return this.bookRepo.getAllBooks();
//   }

//   async addBook(book: Book): Promise<void> {
//     return this.bookRepo.addBook(book);
//   }
// }

import { useEffect, useState } from "react";
import { bookRepository } from "../services/bookRepository";

export const useBooks = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔍 Leemos las variables del entorno (definidas en .env)
  const useMocks = import.meta.env.VITE_USE_MOCKS === "true";
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    console.log("🔧 useBook.ts: Configuración actual:");
    console.log("VITE_USE_MOCKS =", useMocks);
    console.log("VITE_API_URL =", apiUrl);

    // 🔄 Lógica del hook
    bookRepository
      .getBooks()
      .then((data) => {
        console.log("📚 Datos obtenidos:", data);
        setBooks(data);
      })
      .catch((err) => console.error("❌ Error obteniendo libros:", err))
      .finally(() => setLoading(false));
  }, []);

  return { books, loading };
};
