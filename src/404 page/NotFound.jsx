import React from 'react';
import './notfound.scss';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <div className="error-message">
          <h1>Oops! Page Not Found</h1>
          <p>The page you are looking for might have been moved or deleted.</p>
        </div>
        <Link to="/" className="green-button">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;