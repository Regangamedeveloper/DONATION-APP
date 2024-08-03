// Bar.jsx 
import React from 'react';
import './bar.scss'; 
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const Bar = () => {
  return (
    <div className="bar">
      <div className="wrapper">
        <div className="log">
          <img 
            src="https://adra.org.nz/wp-content/uploads/2021/08/ADRA-Horizontal-Logo-WHITE-1024x272.png" // Replace with the actual path to your logo 
            alt="Your Brand" 
          />
        </div>

        <div className="items">
          {/* Existing items (Language, Dark Mode, etc.) */}
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <button className="signInButton">Sign In</button>
          </div>
          <div className="item">
            <button className="loginButton">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bar;