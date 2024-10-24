import React, { useState, useEffect } from 'react';
import './donatemodal.scss'; 
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Stack } from '@mui/material';
import axios from 'axios';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} {...props} />;
});

const Donate = ({ open, onClose }) => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donationFrequency, setDonationFrequency] = useState('one-time');
  const [charityProgram, setCharityProgram] = useState('');
  const [dedication, setDedication] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvv: '' });
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [campaigns, setCampaigns] = useState([]);
  const [campaignsById, setCampaignsById] = useState({});

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get('http://localhost:5000/campaigns');
        setCampaigns(response.data.data);

        const newCampaignsById = {};
        response.data.data.forEach((campaign) => {
          newCampaignsById[campaign._id] = campaign;
        });
        setCampaignsById(newCampaignsById);
      } catch (error) {
        setErrorMessage('Failed to load campaigns. Please try again later.');
        setOpenError(true);
      }
    };

    fetchCampaigns();
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'; // Stop page scrolling
    } else {
      document.body.style.overflow = 'auto'; // Restore scrolling
    }
    return () => {
      document.body.style.overflow = 'auto'; // Clean up when component unmounts
    };
  }, [open]);

  const handleDonate = async () => {
    try {
      const selectedCampaignData = campaignsById[charityProgram];

      if (!selectedCampaignData) {
        setErrorMessage('Please select a valid charity campaign.');
        setOpenError(true);
        return;
      }

      const campaignName = selectedCampaignData.name;

      const response = await axios.post('http://localhost:5000/donations', {
        charityProgram: campaignName,
        donationAmount,
        donationFrequency,
        dedication,
        paymentMethod,
        paymentDetails: paymentMethod === 'mobile-money' ? { mobileNumber } : { cardDetails },
      });

      if (response.status === 201) {
        setOpenSuccess(true);
        setErrorMessage(null);
        setTimeout(() => {
          onClose(); // Close the popup after a successful donation
        }, 3000);
      } else {
        setErrorMessage(response.data.error || 'Donation failed. Please try again.');
        setOpenError(true);
      }
    } catch (error) {
      console.error('Error during donation:', error);
      setErrorMessage('An unexpected error occurred. Please try again later.');
      setOpenError(true);
    }
  };

  const handleCloseSuccess = () => setOpenSuccess(false);
  const handleCloseError = () => setOpenError(false);

  if (!open) return null;

  return (
    <div className="donate-popup">
      <div className="donate-modal">
        <div className="modal-header">
          <h1>Donate to a Charity Program</h1>
          <button className="close-btn" onClick={onClose}>X</button>
        </div>

        <section className="program-details">
          <h2>Selected Charity Campaign</h2>
          <select
            value={charityProgram}
            onChange={(e) => setCharityProgram(e.target.value)}
          >
            <option value="">Select a Program</option>
            {Array.isArray(campaigns) && campaigns.length > 0 ? (
              campaigns.map((campaign) => (
                <option key={campaign._id} value={campaign._id}>
                  {campaign.name}
                </option>
              ))
            ) : (
              <option value="">No campaigns available</option>
            )}
          </select>
        </section>

        <section className="donation-details">
          <h2>Donation Details</h2>

          <label htmlFor="donationAmount">Donation Amount</label>
          <input
            type="number"
            id="donationAmount"
            placeholder="Enter Amount"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
          />

          <label htmlFor="donationFrequency">Donation Frequency</label>
          <select
            value={donationFrequency}
            onChange={(e) => setDonationFrequency(e.target.value)}
          >
            <option value="one-time">One-Time</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="annually">Annually</option>
          </select>

          <label htmlFor="dedication">Dedicate this Donation</label>
          <input
            type="text"
            id="dedication"
            placeholder="In honor/memory of"
            value={dedication}
            onChange={(e) => setDedication(e.target.value)}
          />
        </section>

        <section className="payment-methods">
          <h2>Payment Methods</h2>
          <label htmlFor="paymentMethod">Choose Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">Select Payment Method</option>
            <option value="mobile-money">Mobile Money</option>
            <option value="visa">Visa</option>
          </select>

          {paymentMethod === 'mobile-money' && (
            <div className="mobile-money">
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input
                type="tel"
                id="mobileNumber"
                placeholder="Enter Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
          )}

          {paymentMethod === 'visa' && (
            <div className="card-details">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                placeholder="Card Number"
                value={cardDetails.number}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, number: e.target.value })
                }
              />
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                placeholder="MM/YY"
                value={cardDetails.expiry}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, expiry: e.target.value })
                }
              />
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                id="cvv"
                placeholder="CVV"
                value={cardDetails.cvv}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, cvv: e.target.value })
                }
              />
            </div>
          )}
        </section>

        <button className="btn-mdonate" onClick={handleDonate}>Donate Now</button>

        <Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleCloseSuccess}>
            <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
              Donation successful!
            </Alert>
          </Snackbar>

          <Snackbar open={openError} autoHideDuration={6000} onClose={handleCloseError}>
            <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
              {errorMessage}
            </Alert>
          </Snackbar>
        </Stack>
      </div>
    </div>
  );
};

export default Donate;
