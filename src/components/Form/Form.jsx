import React from 'react';
import PropTypes from 'prop-types';
import BootstrapForm from 'react-bootstrap/Form';
import { Form as FinalForm } from 'react-final-form';

function Form({
  onSubmit,
  validate = () => ({}),
  initialValues,
  formId,
  children,
}) {
  return (
    <FinalForm
      onSubmit={onSubmit}
      validate={validate}
      initialValues={initialValues}
      render={({ handleSubmit, invalid, ...props }) => (
        <BootstrapForm onSubmit={handleSubmit} noValidate id={formId}>
          {children({ ...props, invalid })}
        </BootstrapForm>
      )}
    />
  );
}

Form.defaultProps = {
  validate: () => {},
  initialValues: undefined,
  formId: undefined,
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
  validate: PropTypes.func,

  initialValues: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  formId: PropTypes.string,
};

export default Form;
