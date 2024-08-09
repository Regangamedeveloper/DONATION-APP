import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './donorp.scss';

const Donorp = () => {
  const [donorDetails, setDonorDetails] = useState({
    name: 'Robert Kabushenga',
    email: 'kabushengaR@example.com',
    phone: '555-123-4567',
      address: 'South Carolina, SC',
  });

  useEffect(() => {
    // Fetch the donor's current details from an API or database
    // setDonorDetails(fetchedDetails);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonorDetails({
      ...donorDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit updated details to an API or database
    console.log('Updated Details:', donorDetails);
  };

  return (
    <div className="donorp-page">
      <Navbar />
      <div className="donorp-content">
        <h1>Your Profile</h1>
        <form onSubmit={handleSubmit} className="donor-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={donorDetails.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={donorDetails.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={donorDetails.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={donorDetails.address}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Donorp;
