// // src/hooks/useBooks.ts
// import { useEffect, useState } from "react";
// import type { Book, BookService } from "../services/bookService";

// export function useBooks(bookService: BookService) {
//   const [books, setBooks] = useState<Book[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     bookService
//       .getAllBooks()
//       .then((data) => setBooks(data))
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false));
//   }, [bookService]);

//   return { books, loading, error };
// }


// src/hooks/useBooks.ts
import { useEffect, useState } from "react";
import { bookRepository } from "../services/bookRepository";

export const useBooks = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    bookRepository
      .getBooks()
      .then(setBooks)
      .finally(() => setLoading(false));
  }, []);

  return { books, loading };
};
