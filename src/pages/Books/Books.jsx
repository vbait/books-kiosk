import React, { useEffect, useContext, useCallback, useState } from 'react';
import { BooksContext } from './Books.provider';
import BooksComponent from './Books.component';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import { BookFormWindow } from '../../components/BookForm';
import AlertDialog from '../../components/AlertDialog';
import useToggle from '../../hooks/useToggle';

function Books() {
  const { state, fetchBooks, deleteBook, addBook, editBook } = useContext(
    BooksContext,
  );
  const { data, loading, error } = state;

  const [showAlert, alertToogle] = useToggle(false);
  const [showBook, bookToogle] = useToggle(false);
  const [initData, setInitData] = useState(null);

  const handleAdd = useCallback(() => {
    setInitData(null);
    bookToogle();
  }, [bookToogle]);

  const handleEdit = useCallback(
    (book) => {
      setInitData(book);
      bookToogle();
    },
    [bookToogle],
  );

  const handleDelete = useCallback(
    (book) => {
      setInitData(book);
      alertToogle();
    },
    [alertToogle],
  );

  const handleDeleteBook = useCallback(
    (book) => {
      setInitData(null);
      deleteBook(book);
      alertToogle();
    },
    [alertToogle, deleteBook],
  );

  const handleSubmit = useCallback(
    (book) => {
      if (book.id) {
        editBook(book);
      } else {
        addBook(book);
      }
      bookToogle();
    },
    [bookToogle, addBook, editBook],
  );

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  if (loading || !data) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <BooksComponent
        books={data}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <BookFormWindow
        data={initData}
        show={showBook}
        onClose={bookToogle}
        onSubmit={handleSubmit}
      />
      <AlertDialog
        data={initData}
        message="Are you sure?"
        show={showAlert}
        onClose={alertToogle}
        onDelete={handleDeleteBook}
      />
    </>
  );
}

export default Books;
