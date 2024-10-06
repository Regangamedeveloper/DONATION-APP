import "./charityp.scss";
import Nav from "../../components/nav/Nav";
import Sidebar from "../../components/sidebar/Sidebar";
import React, { useState } from 'react';
import Adminfooter from "../../../Admin/components/Adminfooter";

const Charityp = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="charityp">
      <Sidebar />
      <div className="charitypContainer">
        <Nav />
        <div className="bottom">
          <div className="profiles">
            <h2>Edit Profile</h2>
            <form>
              <div className="profilePicture">
                <div className="profilePicturePreview">
                <img src="https://images.pexels.com/photos/933620/pexels-photo-933620.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Profile" />
                </div>
                <input 
                  type="file" 
                  id="profilePictureInput" 
                  accept="image/*" 
                  onChange={handleImageChange} 
                />
                <label htmlFor="profilePictureInput" className="uploadButton">
                  Choose Profile Picture
                </label>
              </div>

              <div className="formOutput">
                <label>User Name</label>
                <input type="text" placeholder="Joe Deo" />
              </div>
              <div className="formOutput">
                <label>Phone Number</label>
                <input type="number" placeholder="+256-769-567-90" />
              </div>
              <div className="formOutput">
                <label>Email</label>
                <input type="email" placeholder="joe@icloud.com" />
              </div>
              <div className="formOutput">
                <label>Address</label>
                <input type="text" placeholder="Geneva" />
              </div>

              <h3>Change Password</h3>
              <div className="formOutput">
                <label>Current Password</label>
                <input type="password" placeholder="••••••••••" disabled />
              </div>
              <div className="formOutput">
                <label>New Password</label>
                <input type="password" placeholder="Password hidden" />
                <p className="info">Must be at least 8 characters</p>
                <p className="info">Does not contain your email address</p>
              </div>
              <div className="formOutput">
                <label>Confirm New Password</label>
                <input type="password" placeholder="Password hidden" />
              </div>

              <div className="deleteAccount">
                <button type="button" className="deleteButton">Delete Account</button>
                <p>You will lose access to your account once your deletion request has been submitted.</p>
              </div>

              <button type="submit">Save Changes</button> 
            </form>
          </div>
        </div>
        <Adminfooter />
      </div>
     
    </div>
  );
};

export default Charityp;