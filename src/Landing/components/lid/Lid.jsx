import React from 'react';
import "./lid.scss";
import "../bar/bar.scss";
import logo from '../../../Admin/images/adra-vertical-logo-998x1024-2675010800.png';
const Lid = () => {
  return (
    <div className="banner-container">
      {/* Background Image */}
      <div className="banner-background"></div>
      {/* Text and Button */}
      <div className="banner-content">
      <div className="landing-nav">
        <div className="landing-logo">
        <img src={logo} alt=" adra-logo" />
        </div>

          <div className="landing-menu">
            <button className="signInButton">Sign In</button>
            <button className="loginButton">Login</button>
          </div>
        </div>
        <div className="content">
        <h1 className="banner-title">Make a Difference Today</h1>
        <p className="banner-subtitle">Your donation can change lives.</p>
        <div className="banner-buttons">
        <button className="banner-button">Get Involved</button>
        <button className="banner-button">Donate Now</button>
        </div>
        </div> 
      </div>
    </div>
  );
};

export default Lid;
