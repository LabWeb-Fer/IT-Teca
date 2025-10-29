// src/services/adapters/BookApiRepository.ts

//import { IBookRepository } from "../ports/BookRepository";
import type { IBookRepository } from "../ports/BookRepository";
import type { Book } from "../booksService";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export class BookApiRepository implements IBookRepository {
  async getAll(): Promise<Book[]> {
    const res = await fetch(`${API_URL}/books`);
    if (!res.ok) throw new Error("Error al obtener libros");
    return res.json();
  }

  async add(book: Book): Promise<void> {
    const res = await fetch(`${API_URL}/books`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || "Error al crear libro");
    }
  }
}
