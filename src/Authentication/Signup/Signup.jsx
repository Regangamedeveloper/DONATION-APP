import React, { useState } from 'react';
import './signup.scss';
import { Link } from 'react-router-dom';
import logo from '../../Admin/images/adra-vertical-logo-998x1024-2675010800.png';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    try {
      const response = await axios.post('http://localhost:5000/register', {
        firstName,
        lastName,
        email,
        password
      });
      setMessage(response.data.message); // Assuming your backend sends a message
      // Optionally clear the form fields after successful registration
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      setMessage('Error registering user: ' + error.response.data.error);
    }
  };

  return (
    <div className="signup-container">
      <div className="image-signup">
        {/* Add any image or background you want here */}
      </div>
      <div className="signup-form">
        <div className="logo">
          <img src={logo} alt="ADRA Logo" />
        </div>
        <h3>Sign Up</h3>
        {message && <p className="response-message">{message}</p>} {/* Display response message */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
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
              // type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* <span
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: 'pointer' }} // Add a pointer cursor
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </span> */}
          </div>
          <button type="submit" className="green-button">
            Sign Up
          </button>
        </form>
        <p className="account-link">
          Already have an account?{' '}
          <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
