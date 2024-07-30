import "./singleuser.scss";
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';

const Single = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [updatedUserData, setUpdatedUserData] = useState({
    firstName: props.info.firstName || "",
    lastName: props.info.lastName || "",
    email: props.info.email || "",
    phone: props.info.phone || "",
    location: props.info.location || "",
  }); // State to hold updated user data

  const handleUpdate = () => {
    setIsModalOpen(true); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); 
  };

  const handleChange = (e) => {
    setUpdatedUserData({
      ...updatedUserData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to update the user data
    // using updatedUserData
    console.log("Updated User Data:", updatedUserData); // Log for now
    setIsModalOpen(false);
  };

  return (
    <div className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            {props.img && <img src={props.img} alt="" />}
            <h1>{props.title}</h1>
            <button onClick={handleUpdate}>Update</button> 
          </div>
          <div className="details">
            {Object.entries(props.info).map((item) => (
              <div className="item" key={item[0]}>
                <span className="itemTitle">{item[0]}</span>
                <span className="itemValue">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>

        {props.chart && (
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={props.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {props.chart.dataKeys.map((dataKey) => (
                  <Line
                    type="monotone"
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      <div className="activities">
        <h2>Latest Activities</h2>
        {props.activities && (
          <ul>
            {props.activities.map((activity) => (
              <li key={activity.text}>
                <div>
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Modal for Update */}
      {isModalOpen && (
        <div className="update-modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              <CloseIcon />
            </span>
            <h2>Update {props.title}</h2>
            {/* Update form */}
        
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  value={updatedUserData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  value={updatedUserData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={updatedUserData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  value={updatedUserData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location:</label>
                <input
                  type="text"
                  id="location"
                  value={updatedUserData.location}
                  onChange={handleChange}
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

export default Single;