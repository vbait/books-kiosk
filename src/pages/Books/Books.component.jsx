import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import BooksList from '../../components/BooksList';
import BookItem from '../../components/BookItem';

function Books({ books, onAdd, onEdit, onDelete }) {
  return (
    <BooksList>
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
      <BooksList.Footer>
        <Button variant="link" size="sm" onClick={onAdd}>
          Add Book
        </Button>
      </BooksList.Footer>
    </BooksList>
  );
}

Books.defaultProps = {
  onAdd: () => {},
  onEdit: () => {},
  onDelete: () => {},
};

Books.propTypes = {
  onAdd: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,

  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default Books;
