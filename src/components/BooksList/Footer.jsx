import React from 'react';
import PropTypes from 'prop-types';

function Footer({ children }) {
  return <div className="d-block text-right mt-3">{children}</div>;
}

Footer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default Footer;
