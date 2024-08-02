import React, { useState } from 'react';
import './forgot.scss';
import { Link } from 'react-router-dom';

function Forgot() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Email submitted:', email);
  };

  return (
    <div className="forgot-container">
      <div className="forgot-form">
        <h2>Reset Password</h2>
        <p>Enter your email to receive a password reset link.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="green-button">
            Send Reset Link
          </button>
        </form>

        <p className="account-link">
          Remember your password?{' '}
          <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default Forgot;