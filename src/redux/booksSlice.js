import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter(
        (book) => book.id !== action.payload.id
      );
    },
    updateBook: (state, action) => {
      const { id, updatedBook } = action.payload;
      const bookIndex = state.books.findIndex((book) => book.id === id);
      if (bookIndex !== -1) {
        state.books[bookIndex] = { ...state.books[bookIndex], ...updatedBook };
      }
    },
  },
});

export const { addBook, deleteBook, updateBook } = booksSlice.actions;

export default booksSlice.reducer;
