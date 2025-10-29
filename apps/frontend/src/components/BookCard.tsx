
// src/components/BookCard.tsx
import React from "react";

export interface BookCardProps {
  id: string;
  title: string;
  author: string;
  available: boolean;
  onLoan?: (id: string) => void; // ← callback opcional
}

export const BookCard: React.FC<BookCardProps> = ({
  id,
  title,
  author,
  available,
  onLoan,
}) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        background: "#fff",
        width: "220px",
      }}
    >
      <h3>{title}</h3>
      <p>Autor: {author}</p>
      <p style={{ color: available ? "green" : "red" }}>
        {available ? "Disponible" : "Prestado"}
      </p>
      {available && onLoan && (
        <button onClick={() => onLoan(id)}>📚 Prestar</button>
      )}
    </div>
  );
};

