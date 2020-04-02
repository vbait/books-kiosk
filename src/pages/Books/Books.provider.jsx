import React, { createContext, useCallback, useReducer } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { bookReducer, initialState, ACTIONS } from './store';
import fetchBooksData from '../../repository';

const BooksContext = createContext();

function BooksProvider({ children }) {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  const fetchBooks = useCallback(() => {
    dispatch({ type: ACTIONS.FETCH });
    fetchBooksData().then((payload) => {
      dispatch({ type: ACTIONS.SUCCESS, payload });
    });
  }, [dispatch]);

  const editBook = useCallback(
    (payload) => {
      dispatch({ type: ACTIONS.EDIT, payload });
    },
    [dispatch],
  );

  const addBook = useCallback(
    (payload) => {
      dispatch({ type: ACTIONS.ADD, payload: { ...payload, id: uuidv4() } });
    },
    [dispatch],
  );

  const deleteBook = useCallback(
    (payload) => {
      dispatch({ type: ACTIONS.DELETE, payload });
    },
    [dispatch],
  );

  const value = React.useMemo(
    () => ({ state, fetchBooks, editBook, addBook, deleteBook }),
    [state, fetchBooks, editBook, addBook, deleteBook],
  );

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
}

BooksProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default BooksProvider;
export { BooksContext };
