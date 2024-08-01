import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/donorhome">
          <img src="/images/ADRAl-Logo.png" alt="Company Logo" />
        </Link>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/donorhome">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/donate">Donate</Link>
        </li>
        <li className="navbar-item">
          <Link to="/donationrequest">Donation Request</Link>
        </li>
        <li className="navbar-item">
          <Link to="/trackdonation">Track Donations</Link>
        </li>
        <li className="navbar-item">
          <Link to="/transaction">Transactions</Link>
        </li>
        <li className="navbar-item avatar">
          <img src= '/images/avatar.png' alt="User Avatar" onClick={toggleDropdown} />
          {dropdownVisible && (
            <div className="dropdown">
              <Link to="/profile">Edit Profile</Link>
              <Link to="/history">View History</Link>
              <Link to="/logout">Logout</Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;