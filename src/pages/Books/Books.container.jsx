import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import BooksComponent from './Books.component';
import BooksFormWindow from './Books.form';
import Loader from '../../components/Loader';
import AlertDialog from '../../components/AlertDialog';
import useToggle from '../../hooks/useToggle';
import { displayTitle } from '../../utils/formatters';
import validate from './validate';

function BooksContainer({ books, loading, fetch, changeBook, deleteBook }) {
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

  const handleConfirmDeleteBook = useCallback(
    (book) => {
      setInitData(null);
      deleteBook(book);
      alertToogle();
    },
    [alertToogle, deleteBook],
  );

  const handleSubmit = useCallback(
    (book) => {
      changeBook(book);
      bookToogle();
    },
    [bookToogle, changeBook],
  );

  const handleValidate = useCallback(
    ({ title }) => {
      if (title) {
        return validate(books, { ...initData, title });
      }
      return undefined;
    },
    [initData, books],
  );

  useEffect(() => {
    fetch();
  }, [fetch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <BooksComponent
        books={books}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <BooksFormWindow
        data={initData}
        show={showBook}
        onClose={bookToogle}
        onSubmit={handleSubmit}
        validate={handleValidate}
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
        onDelete={handleConfirmDeleteBook}
      />
    </>
  );
}

BooksContainer.defaultProps = {
  fetch: () => {},
  changeBook: () => {},
  deleteBook: () => {},
  books: [],
  loading: false,
};

BooksContainer.propTypes = {
  fetch: PropTypes.func,
  changeBook: PropTypes.func,
  deleteBook: PropTypes.func,
  books: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
};

const mapState = (state) => ({
  books: state.books,
  loading: state.loading.models.books,
});

const mapDispatch = (dispatch) => ({
  fetch: () => dispatch.books.fetchBooks(),
  changeBook: (book) => {
    if (book.id) {
      dispatch.books.edit(book);
    } else {
      dispatch.books.add({ ...book, id: uuidv4() });
    }
  },
  deleteBook: (book) => {
    dispatch.books.delete(book);
  },
});

export default connect(mapState, mapDispatch)(BooksContainer);
