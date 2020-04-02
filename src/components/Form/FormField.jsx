/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import Form from 'react-bootstrap/Form';
import { Input } from '../Controls';
import showErrors from './showErrors';

const errorMessage = (error) => {
  if (!error) return '';
  if (typeof error === 'string' || error instanceof String) {
    return error;
  }
  return error[0];
};

const FormField = (props) => {
  const {
    name,
    label,
    helpText,
    validate,
    control: Control,
    controlId,
    placeholder,
    dateFormat,
  } = props;

  const otherProps = { placeholder };
  if (dateFormat) {
    Object.assign(otherProps, { dateFormat }); // eslint-disable-line prefer-object-spread
  }

  return (
    <Field name={name} validate={validate}>
      {({ input, meta }) => {
        const { error, submitError, dirtySinceLastSubmit } = meta;
        const isSubmitErrors = !!(!dirtySinceLastSubmit && submitError);
        const isErrors = !!(!isSubmitErrors && showErrors(meta) && error);
        return (
          <Form.Group controlId={controlId}>
            {!!label && <Form.Label>{label}</Form.Label>}
            <Control
              isInvalid={isErrors || isSubmitErrors}
              {...input}
              {...otherProps}
            />
            {!!helpText && meta.active && <Form.Text>{helpText}</Form.Text>}
            {!!isSubmitErrors && (
              <Form.Control.Feedback type="invalid">
                {submitError}
              </Form.Control.Feedback>
            )}
            {!!isErrors && (
              <Form.Control.Feedback type="invalid">
                {errorMessage(error)}
              </Form.Control.Feedback>
            )}
          </Form.Group>
        );
      }}
    </Field>
  );
};

FormField.defaultProps = {
  validate: () => {},
  control: Input,

  label: undefined,
  helpText: undefined,
  placeholder: undefined,
  dateFormat: undefined,
};

FormField.propTypes = {
  validate: PropTypes.func,
  control: PropTypes.func,

  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  controlId: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  dateFormat: PropTypes.string,
};

export default FormField;
