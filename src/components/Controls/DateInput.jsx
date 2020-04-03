/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import InputMask from 'react-input-mask';
import { DateTime } from 'luxon';
import { DATE_ISO_FORMAT } from '../../constants';

const DateInput = ({ value, dateFormat, onChange, ...other }) => {
  const handleChange = (e) => {
    const v = e.target.value;
    const date = DateTime.fromFormat(v, dateFormat);
    if (date.isValid) {
      onChange(date.toFormat(DATE_ISO_FORMAT));
    } else {
      onChange(v);
    }
  };

  const date = DateTime.fromFormat(value || '', DATE_ISO_FORMAT);
  let formattedValue = value;
  if (date.isValid) {
    formattedValue = date.toFormat(dateFormat);
  }

  return (
    <InputMask
      {...other}
      mask="99/99/9999"
      value={formattedValue}
      onChange={handleChange}
    >
      {(inputProps) => <Form.Control {...inputProps} value={formattedValue} />}
    </InputMask>
  );
};

DateInput.defaultProps = {
  value: '',
};

DateInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  dateFormat: PropTypes.string.isRequired,
};

export default DateInput;
