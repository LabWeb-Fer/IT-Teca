
// apps/frontend/src/presentation/components/BookList.stories.tsx

import React, { useEffect } from 'react';
import type { Meta } from '@storybook/react';
import { BookList } from './BookList';
import { useBook } from '../hooks/useBook';
import type { Book } from '../../domain/entities/Book';

const meta: Meta<typeof BookList> = {
  title: 'Components/BookList',
  component: BookList,
};

export default meta;


export const WithSeededData = () => {
  const { addBook, loadBooks } = useBook();

  useEffect(() => {

    const seed: Book[] = [
      { id: '1', title: '1984', author: 'George Orwell', available: true },
      { id: '2', title: 'Cien años de soledad', author: 'Gabriel García Márquez', available: true },
    ];

    (async () => {
      await loadBooks(); 
      for (const b of seed) {
        await addBook(b);
      }
    })();

  }, []);

  return <BookList />;
};
