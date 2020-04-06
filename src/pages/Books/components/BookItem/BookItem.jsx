import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { displayDate, displayTitle } from '../../../../utils/formatters';
import NoImageIcon from './NoImage.png';

function BooksList({ book, onEdit, onDelete }) {
  const handleEdit = useCallback(() => {
    onEdit(book);
  }, [book, onEdit]);

  const handleDelete = useCallback(() => {
    onDelete(book);
  }, [book, onDelete]);

  const onImageError = useCallback((e) => {
    e.target.src = NoImageIcon;
  }, []);

  return (
    <div className="media text-muted pb-3 mb-3 border-bottom">
      <img
        className="bd-placeholder-img mr-2 rounded"
        src={book.image || NoImageIcon}
        alt={book.title}
        style={{ width: '80px' }}
        onError={onImageError}
      />
      <div className="media-body pb-3 mb-0 small lh-125 border-gray">
        <div className="d-flex justify-content-between">
          <div>
            <h6 className="mb-0">{displayTitle(book.title)}</h6>
            <strong className="d-block text-gray-dark">{book.author}</strong>
            <small>{displayDate(book.date)}</small>
          </div>
          <div style={{ whiteSpace: 'nowrap' }}>
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
    image: PropTypes.string,
  }).isRequired,
};

export default BooksList;
