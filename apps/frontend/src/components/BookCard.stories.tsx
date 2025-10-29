import type { Meta, StoryObj } from "@storybook/react";
import { BookCard } from "./BookCard";

const meta: Meta<typeof BookCard> = {
  title: "Biblioteca/BookCard", // 🔹 este campo es obligatorio
  component: BookCard,          // 🔹 este también
  tags: ["autodocs"],           // opcional pero recomendado (para Docs)
};

export default meta;            // ✅ Storybook necesita este export

type Story = StoryObj<typeof BookCard>;

export const Disponible: Story = {
  args: {
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    available: true,
  },
};

export const Prestado: Story = {
  args: {
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    available: false,
  },
};
