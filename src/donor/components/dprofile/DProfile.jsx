import React, { useState } from 'react';
import './dprofile.scss';

const DProfile = () => {
  // State to store the user information and manage form inputs
  const [userInfo, setUserInfo] = useState({
    name: 'Elijah Kitaka',
    email: 'kelija23@example.com',
    contact: '555-123-4567',
    address: 'South Carolina, SC',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    profilePicture: './icons/donors.png', // Placeholder image path
  });

  const [editMode, setEditMode] = useState(false);
  const [newProfilePicture, setNewProfilePicture] = useState(null);

  // Function to handle the file input change (for profile picture)
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProfilePicture(URL.createObjectURL(file));
    }
  };

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  // Function to toggle edit mode
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  // Function to save changes
  const handleSaveChanges = () => {
    setEditMode(false);
    if (newProfilePicture) {
      setUserInfo((prevInfo) => ({
        ...prevInfo,
        profilePicture: newProfilePicture,
      }));
      setNewProfilePicture(null);
    }
  };

  return (
    <div className="profile-page">
        <h2>User Profile</h2>
      <div className="profile-container">
        <div className="profile-picture">
          <img
            src={newProfilePicture || userInfo.profilePicture}
            alt="Profile"
          />
          <label className="change-picture">
            Change Profile Picture
            <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
          </label>
        </div>

        <div className="profile-details">
          {!editMode ? (
            <>
              <h3>{userInfo.name}</h3>
              <p>{userInfo.email}</p>
              <p>{userInfo.contact}</p>
              <p>{userInfo.address}</p>
              <p>{userInfo.bio}</p>
              <button className="edit-btn" onClick={toggleEditMode}>
                Edit Profile
              </button>
            </>
          ) : (
            <form className="edit-form">
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={userInfo.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Contact:</label>
                <input
                  type="text"
                  name="contact"
                  value={userInfo.contact}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  value={userInfo.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Bio:</label>
                <textarea
                  name="bio"
                  value={userInfo.bio}
                  onChange={handleInputChange}
                />
              </div>
              <button className="save-btn" type="button" onClick={handleSaveChanges}>
                Save Changes
              </button>
              <button className="cancel-btn" type="button" onClick={toggleEditMode}>
                Cancel
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default DProfile;
