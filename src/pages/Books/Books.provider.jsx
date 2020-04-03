import React, { createContext, useCallback, useReducer } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { bookReducer, initialState, ACTIONS } from './store';
import fetchBooksData from '../../repository';
import validate from './validate';

const BooksContext = createContext();

function BooksProvider({ children }) {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  const fetchBooks = useCallback(() => {
    dispatch({ type: ACTIONS.FETCH });
    return fetchBooksData().then((payload) => {
      dispatch({ type: ACTIONS.SUCCESS, payload });
    });
  }, [dispatch]);

  const changeBook = useCallback(
    (payload) => {
      const errors = validate(state.data, payload);
      if (errors) {
        const error = Error('Not valid');
        error.fields = errors;
        return Promise.reject(error);
      }
      if (payload.id) {
        dispatch({ type: ACTIONS.EDIT, payload });
      } else {
        dispatch({ type: ACTIONS.ADD, payload: { ...payload, id: uuidv4() } });
      }
      return Promise.resolve();
    },
    [state, dispatch],
  );

  const deleteBook = useCallback(
    (payload) => {
      dispatch({ type: ACTIONS.DELETE, payload });
    },
    [dispatch],
  );

  const value = React.useMemo(
    () => ({
      state,
      fetchBooks,
      changeBook,
      deleteBook,
    }),
    [state, fetchBooks, changeBook, deleteBook],
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
