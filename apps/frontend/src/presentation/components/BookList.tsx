
//apps/frontend/src/presentation/components/BookList.tsx

import React, { useEffect, useState } from 'react';
import { useBook } from '../hooks/useBook';
import type { Book } from '../../domain/entities/Book';

export const BookList: React.FC = () => {
  const { books, addBook, loadBooks } = useBook();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    loadBooks();
  }, []);

  const handleAddBook = () => {
    addBook({ id: Date.now().toString(), title, author, available: true });
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <h2>Books</h2>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button onClick={handleAddBook}>Add Book</button>

      <ul>
        {books.map((book: Book) => (
          <li key={book.id}>
            {book.title} ({book.author}) - {book.available ? 'Available' : 'Loaned'}
          </li>
        ))}
      </ul>
    </div>
  );
};
