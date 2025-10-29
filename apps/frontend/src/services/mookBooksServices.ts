export async function getBooks() {
  return Promise.resolve([
    { id: 1, title: "Clean Code", author: "Robert C. Martin" },
    { id: 2, title: "Refactoring", author: "Martin Fowler" },
  ]);
}

export async function addBook(book: { title: string; author: string }) {
  console.log("Mock: Libro agregado", book);
  return Promise.resolve({ ...book, id: Date.now() });
}
