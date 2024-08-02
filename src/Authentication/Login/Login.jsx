import React, { useState } from 'react';
import './login.scss';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Form submitted:', { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Log in to ADRA</h2>
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
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="green-button">
            Log In
          </button>
        </form>

        <div className="forgot-password">
          <Link to="/forgotpassword">Forgot Password?</Link>
        </div>

        <p className="account-link">
          Don't have an account?{' '}
          <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;