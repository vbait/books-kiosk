const initialState = { loading: false, data: null, error: null };

const ACTIONS = {
  FETCH: 'FETCH',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  EDIT: 'EDIT',
  DELETE: 'DELETE',
};

function bookReducer(state, action) {
  switch (action.type) {
    case ACTIONS.FETCH: {
      return { ...state, loading: true };
    }
    case ACTIONS.SUCCESS: {
      return { ...state, data: action.payload, loading: false, error: null };
    }
    case ACTIONS.ERROR: {
      return { ...state, error: action.payload, loading: false };
    }
    case ACTIONS.EDIT: {
      const { payload: book } = action;
      const books = [...state.data];
      const index = books.findIndex(({ id }) => book.id === id);
      books.splice(index, 1, { ...books[index], ...book });
      return { ...state, data: books };
    }
    case ACTIONS.ADD: {
      const { payload: book } = action;
      return { ...state, data: [...state.data, book] };
    }
    case ACTIONS.DELETE: {
      const { payload: book } = action;
      const books = [...state.data];
      const index = books.findIndex(({ id }) => book.id === id);
      books.splice(index, 1);
      return { ...state, data: books };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}

export { initialState, ACTIONS };
export default bookReducer;
