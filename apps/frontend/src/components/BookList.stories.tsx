// src/components/BookList.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { BookList } from "./BookList";

const meta: Meta<typeof BookList> = {
  title: "Biblioteca/BookList",
  component: BookList,
};

export default meta;
type Story = StoryObj<typeof BookList>;

export const Default: Story = {};
