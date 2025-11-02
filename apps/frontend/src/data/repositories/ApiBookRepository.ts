
// apps/frontend/src/data/repositories/ApiBookRepository.ts

import type { Book } from '../../domain/entities/Book';
import type { BookRepository } from '../../domain/use-cases/addBook/BookRepository';

export class ApiBookRepository implements BookRepository {
  private baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  async addBook(book: Book): Promise<void> {
    await fetch(`${this.baseUrl}/books`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });
  }

  async getAll(): Promise<Book[]> {
    const res = await fetch(`${this.baseUrl}/books`);
    return await res.json();
  }

  async getById(id: string): Promise<Book | null> {
    const res = await fetch(`${this.baseUrl}/books/${id}`);
    if (res.status === 404) return null;
    return await res.json();
  }

  async clear(): Promise<void> {
    await fetch(`${this.baseUrl}/books/clear`, { method: 'DELETE' });
  }
}
