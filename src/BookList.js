import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook, updateBook } from './redux/booksSlice';
import './BookList.css';

function BookList() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  const [editingBookId, setEditingBookId] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedAuthor, setUpdatedAuthor] = useState('');

  const handleDelete = (bookId) => {
    dispatch(deleteBook({ id: bookId }));
  };

  const handleEdit = (bookId) => {
    setEditingBookId(bookId);
    setUpdatedTitle('');
    setUpdatedAuthor('');
  };

  const handleUpdate = (bookId) => {
    const updatedBook = {
      title: updatedTitle,
      author: updatedAuthor,
    };

    dispatch(updateBook({ id: bookId, updatedBook }));
    setEditingBookId(null);
    setUpdatedTitle('');
    setUpdatedAuthor('');
  };

  return (
    <div className="book-list">
      {books.map((book) => (
        <div className="book-card" key={book.id}>
          {editingBookId === book.id ? (
            <div className="edit-card">
              <input
                type="text"
                placeholder="Title"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
              />
              <input
                type="text"
                placeholder="Author"
                value={updatedAuthor}
                onChange={(e) => setUpdatedAuthor(e.target.value)}
              />
              <button onClick={() => handleUpdate(book.id)}>Save</button>
            </div>
          ) : (
            <>
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <button className ="button"style ={{margin : '10px'}}onClick={() => handleDelete(book.id)}>Delete</button>
              <button className ="button" onClick={() => handleEdit(book.id)}>Update</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default BookList;
