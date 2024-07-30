import React, { useState } from 'react';
import './adminprofile.scss';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star'; 
import  avatar from '../images/young.jpg'
import { Padding } from '@mui/icons-material';

const Adminprofile = () => {
  const [userData, setUserData] = useState({
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@example.com',
    phone: '555-123-4567',
    location: 'New York, NY',
    createdAt: '2023-03-15',
    rating: 4.5,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activities = [
    { id: 1, activity: 'Logged in', timestamp: '2023-07-24 14:33:00' },
    { id: 2, activity: 'Edited profile', timestamp: '2023-07-24 12:15:00' },
    { id: 3, activity: 'Posted a comment', timestamp: '2023-07-23 09:45:00' },
  ];

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveChanges = () => {
    setUserData({
      ...userData,
      firstName: document.getElementById('firstName')?.value || userData.firstName,
      lastName: document.getElementById('lastName')?.value || userData.lastName,
      email: document.getElementById('email')?.value || userData.email,
      phone: document.getElementById('phone')?.value || userData.phone,
      location: document.getElementById('location')?.value || userData.location,
    });

    setIsEditing(false);
    setIsModalOpen(false); 
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="user-profile">
      <div className="profile-content">
        <div className="profile-left">
          <div className="profile-header">
            <img src={avatar} alt="User Profile" />
            <h1>{userData.firstName} {userData.lastName}</h1>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={i < Math.round(userData.rating) ? 'filled' : 'empty'}
                />
              ))}
              <span> ({userData.rating}/5)</span>
            </div>
            {isEditing ? (
              <button onClick={handleSaveChanges}>
                <SaveIcon /> Save Changes
              </button>
            ) : (
              <button onClick={handleOpenModal}>
                <EditIcon style={{
                  padding:'5px',
                  alignItems:'center',
                }}/> 
                Edit Profile
              </button>
            )}
          </div>

          <div className="profile-info">
            <div className="info-item">
              <AccountCircleIcon />
              <span>{userData.firstName} {userData.lastName}</span>
            </div>
            <div className="info-item">
              <EmailIcon />
              <span>{userData.email}</span>
            </div>
            <div className="info-item">
              <PhoneIcon />
              <span>{userData.phone}</span>
            </div>
            <div className="info-item">
              <LocationOnIcon />
              <span>{userData.location}</span>
            </div>
            <div className="info-item">
              <CalendarTodayIcon />
              <span>{userData.createdAt}</span>
            </div>
          </div>
        </div>

        <div className="profile-right">
          <h2>Latest Activities</h2>
          <ul>
            {activities.map(activity => (
              <li key={activity.id}>
                <div>
                  <p>{activity.activity}</p>
                  <time>{activity.timestamp}</time>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isModalOpen && (
        <div className="update-modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              <CloseIcon />
            </span>
            <h2>Edit Profile</h2>
            <form onSubmit={handleSaveChanges}>
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  defaultValue={userData.firstName}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      firstName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  defaultValue={userData.lastName}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      lastName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  defaultValue={userData.email}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  defaultValue={userData.phone}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      phone: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location:</label>
                <input
                  type="text"
                  id="location"
                  defaultValue={userData.location}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      location: e.target.value,
                    })
                  }
                />
              </div>
              <button type="submit">Save Changes</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Adminprofile;
