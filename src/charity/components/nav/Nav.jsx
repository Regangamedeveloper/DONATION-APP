// Bar.jsx 
import React from 'react';
import './nav.scss'; 
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const Nav = () => {
  return (
    <div className="nav">
      <div className="wrapper">
        <div className="brand">
        <span className="tube">
        <img src="https://adra.org.nz/wp-content/uploads/2019/11/adra-vertical-logo.png"alt="Your Logo" className="tube" /> </span>
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
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <button className="signInButton">Sign out </button>
          </div>
          <div className="item">
            <button className="loginButton">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;