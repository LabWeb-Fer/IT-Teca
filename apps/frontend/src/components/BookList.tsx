// src/components/BookList.tsx
import React from "react";
import { useBooks } from "../hooks/useBooks";
import { mockBookService } from "../services/bookService";
import { BookCard } from "./BookCard";

export const BookList: React.FC = () => {
  const { books, loading, error } = useBooks(mockBookService);

  if (loading) return <p>Cargando libros...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {books.map((b) => (
        <BookCard key={b.id} title={b.title} author={b.author} available={b.available} />
      ))}
    </div>
  );
};
