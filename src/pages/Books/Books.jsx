import React, { useEffect, useContext, useCallback, useState } from 'react';
import { BooksContext } from './Books.provider';
import BooksComponent from './Books.component';
import BooksFormWindow from './Books.form';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import AlertDialog from '../../components/AlertDialog';
import useToggle from '../../hooks/useToggle';
import { displayTitle } from '../../utils/formatters';

function Books() {
  const { state, fetchBooks, deleteBook, changeBook } = useContext(
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
      return changeBook(book)
        .then(() => {
          bookToogle();
        })
        .catch((e) => {
          return e.fields;
        });
    },
    [bookToogle, changeBook],
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
      <BooksFormWindow
        data={initData}
        show={showBook}
        onClose={bookToogle}
        onSubmit={handleSubmit}
      />
      <AlertDialog
        data={initData}
        message={
          <span>
            Do you want to delete&nbsp;
            <strong>
              &quot;{initData && displayTitle(initData.title)}&quot;
            </strong>
            &nbsp;book?
          </span>
        }
        show={showAlert}
        onClose={alertToogle}
        onDelete={handleDeleteBook}
      />
    </>
  );
}

export default Books;
