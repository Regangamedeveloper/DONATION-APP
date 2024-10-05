// Bar.jsx 
import React from 'react';
import './bar.scss'; 
import logo from '../../../Admin/images/adra-vertical-logo-998x1024-2675010800.png';

const Bar = () => {
  return (
    <div className="landing-nav">
        <div className="landing-logo">
        <img src={logo} alt=" adra-logo" />
        </div>

          <div className="landing-menu">
            <button className="signInButton">Sign In</button>
            <button className="loginButton">Login</button>
          </div>
        </div>
  );
};

export default Bar;