import React from 'react';
import Form from 'react-bootstrap/Form';

const Input = (props) => {
  return <Form.Control {...props} />; // eslint-disable-line react/jsx-props-no-spreading
};

export default Input;
