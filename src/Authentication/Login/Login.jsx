import React, { useState } from 'react';
import './login.scss';
import { Link } from 'react-router-dom';
import logo from '../../Admin/images/adra-vertical-logo-998x1024-2675010800.png';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      setMessage(response.data.message); // Handle successful login message
      // Optionally, redirect the user or store user data in local storage/session storage
    } catch (error) {
      setMessage('Error logging in: ' + error.response.data.error);
    }
  };

  return (
    <div className="login-container">
      <div className="image-login">
        {/* Add any image or background you want here */}
      </div>
      <div className="login-form">
        <div className="logo">
          <img src={logo} alt="ADRA Logo" />
        </div>
        <h2>Login</h2>
        {message && <p className="response-message">{message}</p>} {/* Display response message */}
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
