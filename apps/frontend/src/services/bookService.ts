
// // src/services/bookService.ts
// export interface Book {
//   id: string;
//   title: string;
//   author: string;
//   available: boolean;
// }

// export interface BookService {
//   getAllBooks(): Promise<Book[]>;
// }

// // Mock de servicio (para Storybook / desarrollo visual)
// export const mockBookService: BookService = {
//   async getAllBooks() {
//     return Promise.resolve([
//       { id: "1", title: "El Principito", author: "Antoine de Saint-Exupéry", available: true },
//       { id: "2", title: "1984", author: "George Orwell", available: false },
//       { id: "3", title: "Cien años de soledad", author: "Gabriel García Márquez", available: true },
//     ]);
//   },
// };


//biblioteca-system/apps/frontend/src/services/bookService.ts
const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

export async function getBooks() {
  const response = await fetch(`${API_URL}/books`);
  if (!response.ok) throw new Error("Error al obtener los libros");
  return response.json();
}

export async function addBook(book: { title: string; author: string }) {
  const response = await fetch(`${API_URL}/books`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
  if (!response.ok) throw new Error("Error al agregar el libro");
  return response.json();
}
