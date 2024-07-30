import React from 'react';
import './adminnavbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsIcon from '@mui/icons-material/Settings';
import Badge from '@mui/material/Badge';
import logo from '../images/adra-vertical-logo-998x1024-2675010800.png'
import avatar from '../images/young.jpg'

const Adminnavbar = () => {
  return (
    <nav className="adminbar">
      <div className="adminlogo">
        <img src={logo} alt="logo" />
      </div>

      <div className="right-section"> 
        <div className="adminicons">
          <div className="icon-wrapper">
            <SearchIcon />
          </div>
          <div className="icon-wrapper">
            <AppsIcon />
          </div>
          <div className="icon-wrapper">
        <AspectRatioIcon />
          </div>
          <div className="icon-wrapper">
            <Badge badgeContent={1} color="error">
              <NotificationsIcon />
            </Badge>
          </div>
          
        </div>

        <div className="user">
          <img
            src={avatar}
            alt="avatar"
            className="avatar"
          />
          <span className="username">Jane</span>
        </div>
          <div className="icon-wrapper">
            
            <SettingsIcon />
          </div>
      </div>

    </nav>
  );
};

export default Adminnavbar;