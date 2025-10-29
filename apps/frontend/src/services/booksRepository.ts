//biblioteca-system/apps/frontend/src/services/bookRepository.ts

import * as api from "./booksService";
import * as mock from "./mockBooksService";

const USE_MOCKS = import.meta.env.VITE_USE_MOCKS === "true";

export const bookRepository = USE_MOCKS ? mock : api;
