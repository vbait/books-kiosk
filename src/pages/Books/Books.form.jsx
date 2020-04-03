import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import Form, { FormField, validators } from '../../components/Form';
import { DateInput } from '../../components/Controls';
import { INPUT_DATE_FORMAT } from '../../constants';

const formValidators = {
  title: validators.required,
  author: validators.required,
  date: validators.composeValidators(validators.required, validators.date()),
};

function BookManipulationWindow({ show, data, onClose, onSubmit }) {
  const handleSubmit = useCallback(
    (values) => {
      return onSubmit({ ...data, ...values });
    },
    [data, onSubmit],
  );

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{data ? 'Edit Book' : 'Add Book'}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit} initialValues={data}>
        {() => (
          <>
            <Modal.Body>
              <FormField
                name="title"
                label="Title"
                placeholder="Enter book name."
                validate={formValidators.title}
                controlId="id_title"
              />
              <FormField
                name="author"
                label="Author"
                placeholder="Enter author name."
                validate={formValidators.author}
                controlId="id_author"
              />
              <FormField
                name="date"
                label="Date"
                placeholder="MM/DD/YYYY"
                validate={formValidators.date}
                controlId="id_date"
                control={DateInput}
                dateFormat={INPUT_DATE_FORMAT}
              />
              <FormField
                name="image"
                label="Image"
                placeholder="Image http(s) path."
                controlId="id_image"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={onClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </>
        )}
      </Form>
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
