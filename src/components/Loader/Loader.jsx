import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './styles.scss';

function Loader() {
  return (
    <div className="loader">
      <div className="loader-backdrop" />
      <div className="loader-spinner">
        <Spinner animation="border" variant="primary" />
      </div>
    </div>
  );
}

export default Loader;
