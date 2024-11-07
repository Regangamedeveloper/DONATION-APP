import "./nav.scss";
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { useState } from 'react'; // Import useState
import { Button, Modal, Box, Typography,IconButton } from '@mui/material';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import CloseIcon from '@mui/icons-material/Close'
// Sample styles for the modal popup
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // Implement your logout logic here (e.g., redirect to login page, clear session)
    console.log("Logging out...");
  };
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Example stats (replace with your actual data)
  const stats = {
    totalDonations: "UGX 1,500,000",
    activeCampaigns: 5,
    recentActivity: "Last donation 1 hour ago",
  };

  return (
    <div className="nav">
      <div className="wrapper">
      {/* Analytics Overview Button */}
      <Button
        onClick={handleOpen}
        variant="contained"
        startIcon={<InsightsOutlinedIcon />}
        sx={{ backgroundColor: '#007b5f', color: 'white', marginRight: '10px' ,'&:hover': { backgroundColor: '#005f3e' } }} >
        Analytics Overview
      </Button>

      {/* Modal for Analytics Overview */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
            {/* Close Button */}
            <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: 'gray',
              backgroundColor: 'white',
              '&:hover': {
                backgroundColor: 'red'
              },
              width: 32,
              height: 32,
              boxShadow: 1,
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" component="h2" gutterBottom sx={{color: '#007B5F;'}}>
            Analytics Overview
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}><strong>Total Donations: </strong>{stats.totalDonations}</Typography>
          <Typography variant="body1"sx={{ mt: 1 }}><strong>Active Campaigns:</strong> {stats.activeCampaigns}</Typography>
          <Typography variant="body1"sx={{ mt: 1 }}><strong>Recent Activity:</strong> {stats.recentActivity}</Typography>
        </Box>
      </Modal>
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