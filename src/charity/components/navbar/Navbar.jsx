import React, { useState } from "react";
import "./navbar.scss";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import Diversity1SharpIcon from "@mui/icons-material/Diversity1Sharp";

// LanguageIcon component
const LanguageIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className="icon"
    >
      <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17c-.53 2.57-2.05 4.78-3.95 6.8l.03.03l2.53 2.51C14.63 14.08 15.36 13 17 13v-2c-1.96 0-3.5 1.56-3.95 3.53z" />
    </svg>
  );
};

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="logo">
          <Diversity1SharpIcon />
        </div>
        <div className="items">
          <div className="item" >
            <LanguageIcon />
          
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
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;