import "./nav.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { useState } from 'react'; // Import useState


const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // Implement your logout logic here (e.g., redirect to login page, clear session)
    console.log("Logging out...");
  };

  return (
    <div className="nav">
      <div className="wrapper">
      <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
        <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item" onClick={handleProfileClick}> {/* Add onClick */}
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
            {showDropdown && ( // Conditional rendering for dropdown
              <div className="profileDropdown">
                <a href="/charityp" className="dropdownItem">
                  Edit Profile
                </a>
                <a href="#" className="dropdownItem" onClick={handleLogout}>
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;