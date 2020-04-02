import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import BookForm from './BookForm';

function BookManipulationWindow({ show, data, onClose, onSubmit }) {
  const handleClick = useCallback(() => {
    document.getElementById('id_book_form').dispatchEvent(new Event('submit'));
  }, []);

  const handleSubmit = useCallback(
    (values) => {
      onSubmit({ ...data, ...values });
    },
    [data, onSubmit],
  );

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Book Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BookForm initialValues={data} onSubmit={handleSubmit} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClick}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

BookManipulationWindow.defaultProps = {
  onClose: () => {},
  onSubmit: () => {},
  show: false,
  data: undefined,
};

BookManipulationWindow.propTypes = {
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  show: PropTypes.bool,
  data: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default BookManipulationWindow;
