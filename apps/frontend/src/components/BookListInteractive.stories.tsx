
// // src/components/BookListInteractive.stories.tsx
// import type { Meta, StoryObj } from "@storybook/react";
// import { BookListInteractive } from "./BookListInteractive";
// import type { Book } from "../services/booksService";
// import { BookUseCases } from "../services/use-cases/BookUseCases";
// // import { IBookRepository } from "../services/ports/BookRepository";
// import type { IBookRepository } from "../services/ports/BookRepository";

// class MockBookRepo implements IBookRepository {
//   getAll(): Promise<Book[]> {
//     return Promise.resolve([
//       { id: "1", title: "Libro Mock 1", author: "Autor 1", isbn: "123" },
//       { id: "2", title: "Libro Mock 2", author: "Autor 2", isbn: "456" },
//     ]);
//   }
//   add(book: Book): Promise<void> {
//     console.log("Mock add book", book);
//     return Promise.resolve();
//   }
// }

// const meta: Meta<typeof BookListInteractive> = {
//   title: "Biblioteca/BookList Interactiva",
//   component: BookListInteractive,
// };
// export default meta;
// type Story = StoryObj<typeof BookListInteractive>;

// export const ConMock: Story = {
//   render: () => {
//     const useCases = new BookUseCases(new MockBookRepo());
//     return <BookListInteractive useCases={useCases} />;
//   },
// };




// src/components/BookListInteractive.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { BookListInteractive } from "./BookListInteractive";

const meta: Meta<typeof BookListInteractive> = {
  title: "Biblioteca/BookList Interactiva",
  component: BookListInteractive,
};

export default meta;
type Story = StoryObj<typeof BookListInteractive>;

// 👇 exporta una historia llamada "ConMock" o "Default", en minúsculas en el id
export const ConMock: Story = {
  render: () => <BookListInteractive />,
};
