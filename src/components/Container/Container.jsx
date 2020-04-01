import React from 'react';
import PropTypes from 'prop-types';
import LogoImg from './logo.svg';

function Container({ children }) {
  return (
    <main role="main" className="container">
      <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded shadow-sm">
        <img className="mr-3" src={LogoImg} alt="" width="48" height="48" />
        <div className="lh-100">
          <h5 className="mb-0 text-white lh-100">Books</h5>
        </div>
      </div>
      {children}
    </main>
  );
}

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default Container;
