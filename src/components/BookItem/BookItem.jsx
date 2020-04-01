import React from 'react';
import { Button } from 'react-bootstrap';

function BooksList() {
  return (
    <div className="media text-muted pt-3">
      <svg
        className="bd-placeholder-img mr-2 rounded"
        width="50"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        role="img"
        aria-label="Placeholder: 32x32"
      >
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#007bff" />
      </svg>
      <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <div className="d-flex justify-content-between">
          <div>
            <strong className="d-block text-gray-dark">@username</strong>
            <h6 className="mb-0">Book Title</h6>
            <small>12/12/2345</small>
          </div>
          <div>
            <Button variant="link" size="sm">
              Edit
            </Button>
            |
            <Button variant="link danger" size="sm">
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BooksList;
