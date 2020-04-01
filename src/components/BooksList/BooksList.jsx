import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';

function BooksList({ children }) {
  return <div className="my-3 p-3 bg-white rounded shadow-sm">{children}</div>;
}

BooksList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

BooksList.Footer = Footer;

export default BooksList;
