import React, { useState, useEffect } from 'react';
import { Modal, Box, Button } from '@mui/material';
import './updatedonation.scss';

const UpdateDonation = ({ open, handleClose, donationData, handleUpdate }) => {
  const [formData, setFormData] = useState(donationData);

  useEffect(() => {
    setFormData(donationData);
  }, [donationData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(formData);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="modal-box">
        <h2 style={{
            marginBottom:'10px',
            fontSize:'1.8rem',
            fontWeight:700,
        }}>Update Donation</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="donor_name">Donor Name</label>
            <input
              type="text"
              id="donor_name"
              name="donor_name"
              value={formData.donor_name}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="campaign_name">Campaign Name</label>
            <input
              type="text"
              id="campaign_name"
              name="campaign_name"
              value={formData.campaign_name}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="donation_amount">Amount Donated</label>
            <input
              type="text"
              id="donation_amount"
              name="donation_amount"
              value={formData.donation_amount}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="donation_date">Donation Date</label>
            <input
              type="date"
              id="donation_date"
              name="donation_date"
              value={formData.donation_date}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="donation_status">Donation Status</label>
            <select
              id="donation_status"
              name="donation_status"
              value={formData.donation_status}
              onChange={handleChange}
              className="form-control"
            >
              <option value="Confirmed">Confirmed</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{
              boxShadow: 'none',
              border: 'none',
              backgroundColor: '#017960',
            }}
          >
            Update
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default UpdateDonation;
