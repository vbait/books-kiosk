import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

function AlertDialog({ show, message, data, onClose, onDelete }) {
  const handleDelete = useCallback(() => {
    onDelete(data);
  }, [data, onDelete]);

  return (
    <Modal size="xs" show={show} onHide={onClose}>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

AlertDialog.defaultProps = {
  onClose: () => {},
  onDelete: () => {},
  show: false,
  message: '',
  data: null,
};

AlertDialog.propTypes = {
  onClose: PropTypes.func,
  onDelete: PropTypes.func,
  show: PropTypes.bool,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  data: PropTypes.any, // eslint-disable-line react/forbid-prop-types
};

export default AlertDialog;
