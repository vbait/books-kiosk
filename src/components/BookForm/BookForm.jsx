import React from 'react';
import PropTypes from 'prop-types';
import Form, { FormField, validators } from '../Form';
import { DateInput } from '../Controls';
import { INPUT_DATE_FORMAT } from '../../constants';

const formValidators = {
  title: validators.required,
  author: validators.required,
  date: validators.composeValidators(validators.required, validators.date()),
};

function BookForm({ initialValues, onSubmit }) {
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      formId="id_book_form"
    >
      {() => {
        return (
          <>
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
            <input type="submit" style={{ display: 'none' }} />
          </>
        );
      }}
    </Form>
  );
}

BookForm.defaultProps = {
  onSubmit: () => {},
  initialValues: undefined,
};

BookForm.propTypes = {
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default BookForm;
