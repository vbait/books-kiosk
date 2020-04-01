import React from 'react';
import { Button } from 'react-bootstrap';
import BooksList from '../../components/BooksList';
import BookItem from '../../components/BookItem';

function Books() {
  return (
    <BooksList>
      <BookItem />
      <BooksList.Footer>
        <Button variant="link" size="sm">
          Add Book
        </Button>
      </BooksList.Footer>
    </BooksList>
  );
}

export default Books;
