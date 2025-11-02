
//frontend/src/presentation/hooks/useBook.ts

import { useState } from 'react';
import { InMemoryBookRepository } from '../../data/repositories/InMemoryBookRepository';
import { AddBook } from '../../domain/use-cases/addBook/AddBook';
import type { Book } from '../../domain/entities/Book';

const bookRepo = new InMemoryBookRepository();
const addBookUseCase = new AddBook(bookRepo);

export function useBook() {
  const [books, setBooks] = useState<Book[]>([]);

  const addBook = async (book: Book) => {
    await addBookUseCase.execute(book);
    const updatedBooks = await addBookUseCase.listBooks();
    setBooks(updatedBooks);
  };

  const loadBooks = async () => {
    const currentBooks = await addBookUseCase.listBooks();
    setBooks(currentBooks);
  };

  return { books, addBook, loadBooks };
}
