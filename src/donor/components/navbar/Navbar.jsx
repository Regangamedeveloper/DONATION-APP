import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss'
//import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/donorhome">
          <img src="/images/ADRAl-Logo.png" alt="Company Logo" />
        </Link>
      </div>
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        {menuOpen ? '✖' : '☰'}
      </div>
      <ul className={`navbar-list ${menuOpen ? 'active' : ''}`}>
        <li className="navbar-item">
          <Link to="/donorhome" onClick={toggleMenu}>Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/donate" onClick={toggleMenu}>Donate</Link>
        </li>
        <div className="navbar-item icon">
        <Link to="/donationrequest" onClick={toggleMenu}>Donation Requests</Link>
          <div className="counter">2</div>
        </div>
        <li className="navbar-item">
          <Link to="/trackdonation" onClick={toggleMenu}>Track Donations</Link>
        </li>
        <li className="navbar-item avatar">
          <img src="/images/avatar.png" alt="User Avatar" onClick={toggleDropdown} />
          {dropdownVisible && (
            <div className="dropdown">
              <Link to="/profile" onClick={toggleMenu}>View Profile</Link>
              <Link to="/transaction" onClick={toggleMenu}>Transactions</Link>
              <Link to="/logout" onClick={toggleMenu}>Logout</Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;