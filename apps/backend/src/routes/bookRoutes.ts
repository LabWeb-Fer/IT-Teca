
// apps/backend/src/routes/bookRoutes.ts

import type { FastifyInstance } from 'fastify';
import { AddBook } from '../../../../domain/src/use-cases/add-book/AddBook';
import { SequelizeBookRepository } from '../repositories/SequelizeBookRepository';

export async function bookRoutes(app: FastifyInstance) {
  const bookRepo = new SequelizeBookRepository();

  app.post('/books', async (request, reply) => {
    const { title, author, isbn } = request.body as {
      title: string;
      author: string;
      isbn: string;
    };
    try {
      const addBook = new AddBook(bookRepo);
      await addBook.execute({ title, author, isbn });
      reply.code(201).send({ message: 'Book created' });
    } catch (err: any) {
      reply.code(400).send({ error: err.message });
    }
  });

  app.get('/books', async (request, reply) => {
    try {
      const books = await bookRepo.findAll();

      const booksDTO = books.map(book => ({
        id: book.id,
        title: book.title,
        author: book.author,
        isbn: book.isbn,
        available: book.isAvailable,
      }));

      reply.send(booksDTO);
    } catch (err) {
      reply.code(500).send({ error: 'No se pudieron encontrar libros' });
    }
  });
}
