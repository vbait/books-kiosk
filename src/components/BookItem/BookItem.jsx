import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { displayDate, displayTitle } from '../../utils/formatters';

function BooksList({ book, onEdit, onDelete }) {
  const handleEdit = useCallback(() => {
    onEdit(book);
  }, [book, onEdit]);

  const handleDelete = useCallback(() => {
    onDelete(book);
  }, [book, onDelete]);

  return (
    <div className="media text-muted pt-3">
      <svg
        className="bd-placeholder-img mr-2 rounded"
        width="50"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
        aria-label="Placeholder: 32x32"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#007bff" />
      </svg>
      <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <div className="d-flex justify-content-between">
          <div>
            <h6 className="mb-0">{displayTitle(book.title)}</h6>
            <strong className="d-block text-gray-dark">{book.author}</strong>
            <small>{displayDate(book.date)}</small>
          </div>
          <div>
            <Button variant="link" size="sm" onClick={handleEdit}>
              Edit
            </Button>
            |
            <Button variant="link danger" size="sm" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

BooksList.defaultProps = {
  onEdit: () => {},
  onDelete: () => {},
};

BooksList.propTypes = {
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,

  book: PropTypes.shape({
    author: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};

export default BooksList;
