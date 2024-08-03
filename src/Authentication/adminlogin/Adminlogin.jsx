import React, { useState } from 'react';
import './adminlogin.scss';
import logo from '../../Admin/images/adra-vertical-logo-998x1024-2675010800.png';

function Adminlogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle admin login logic here
    console.log('Form submitted:', { email, password });
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-form">
        <div className="logo">
          {/* Replace with your actual logo */}
          <img src={logo} alt="ADRA Logo" />
        </div>

        <h4>Admin Login</h4>

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
      </div>
    </div>
  );
}

export default Adminlogin;