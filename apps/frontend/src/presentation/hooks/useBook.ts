
// //frontend/src/presentation/hooks/useBook.ts

// import { useState } from 'react';
// import { InMemoryBookRepository } from '../../data/repositories/InMemoryBookRepository';
// import { AddBook } from '../../domain/use-cases/addBook/AddBook';
// import type { Book } from '../../domain/entities/Book';

// const bookRepo = new InMemoryBookRepository();
// const addBookUseCase = new AddBook(bookRepo);

// export function useBook() {
//   const [books, setBooks] = useState<Book[]>([]);

//   const addBook = async (book: Book) => {
//     await addBookUseCase.execute(book);
//     const updatedBooks = await addBookUseCase.listBooks();
//     setBooks(updatedBooks);
//   };

//   const loadBooks = async () => {
//     const currentBooks = await addBookUseCase.listBooks();
//     setBooks(currentBooks);
//   };

//   return { books, addBook, loadBooks };
// }


// apps/frontend/src/presentation/hooks/useBook.ts
import { useState, useEffect } from 'react';
import { createBookRepository } from '../../data/repositories/factories/bookRepositoryFactory';
import { AddBook } from '../../domain/use-cases/addBook/AddBook';
import { ListBooks } from '../../domain/use-cases/listBooks/ListBooks';
import type { Book } from '../../domain/entities/Book';

const bookRepo = createBookRepository();
const addBookUseCase = new AddBook(bookRepo);
const listBooksUseCase = new ListBooks(bookRepo);

export function useBook() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    loadBooks();
  }, []);

  async function loadBooks() {
    const result = await listBooksUseCase.execute();
    setBooks(result);
  }

  async function addBook(book: Book) {
    await addBookUseCase.execute(book);
    await loadBooks();
  }

  return { books, loadBooks, addBook };
}
