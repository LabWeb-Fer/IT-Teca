
// src/components/BookListInteractive.tsx
import React, { useEffect, useState } from "react";
import { BookUseCases } from "../services/use-cases/BookUseCases";
import { BookApiRepository } from "../services/adapters/BookApiRepository";
import type { Book } from "../services/booksService";

export const BookListInteractive = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const repo = new BookApiRepository();
  const useCases = new BookUseCases(repo);

  useEffect(() => {
    useCases.getBooks().then(setBooks).catch(console.error);
  }, []);

  const handleLoanClick = (bookName: string) => {
    alert(`Simulando préstamo de ${bookName}`);
  };

  return (
    <div>
      <h3>Lista de libros</h3>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title}{" "}
            <button onClick={() => handleLoanClick(book.title)}>Prestar libro</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
