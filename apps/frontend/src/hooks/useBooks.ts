// src/hooks/useBooks.ts
import { useEffect, useState } from "react";
import type { Book, BookService } from "../services/bookService";

export function useBooks(bookService: BookService) {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    bookService
      .getAllBooks()
      .then((data) => setBooks(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [bookService]);

  return { books, loading, error };
}
