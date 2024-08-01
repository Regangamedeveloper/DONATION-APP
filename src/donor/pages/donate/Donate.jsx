import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './donate.scss';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donationFrequency, setDonationFrequency] = useState('one-time');
  const [charityProgram, setCharityProgram] = useState('');
  const [dedication, setDedication] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvv: '' });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleDonate = () => {
    // Handle donation logic
    setIsSuccess(true); // Simulate successful transaction
  };

  return (
    <div className="donate-page">
      <Navbar />
      <div className="donate-content">
        <h1>Donate to a Charity Program</h1>

        <section className="program-details">
          <h2>Select a Charity Campaign</h2>
          <select value={charityProgram} onChange={(e) => setCharityProgram(e.target.value)}>
            <option value="">Select a Program</option>
            <option value="Education Program">Education Program</option>
            <option value="Health Program">Health Program</option>
          </select>
        </section>

        <section className="donation-details">
          <h2>Donation Details</h2>

          <label>Donation Amount</label>
          <div className="amount-options">
            <button onClick={() => setDonationAmount(100000)}>100,000</button>
            <button onClick={() => setDonationAmount(500000)}>500,000</button>
            <button onClick={() => setDonationAmount(5000000)}>5,000,000</button>
            <button onClick={() => setDonationAmount(10000000)}>10,000,000</button>
            <input
              type="number"
              placeholder="Enter Amount"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
            />
          </div>

          <label>Donation Frequency</label>
          <select value={donationFrequency} onChange={(e) => setDonationFrequency(e.target.value)}>
            <option value="one-time">One-Time</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="annually">Annually</option>
          </select>

          <label>Dedicate this Donation</label>
          <input
            type="text"
            placeholder="In honor/memory of"
            value={dedication}
            onChange={(e) => setDedication(e.target.value)}
          />
        </section>

        <section className="payment-methods">
          <h2>Payment Methods</h2>
          <label>Choose Payment Method</label>
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="">Select Payment Method</option>
            <option value="mobile-money">Mobile Money</option>
            <option value="visa">Visa</option>
          </select>

          {paymentMethod === 'mobile-money' && (
            <div className="mobile-money">
              <label>Mobile Number</label>
              <input
                type="tel"
                placeholder="Enter Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
          )}

          {paymentMethod === 'visa' && (
            <div className="card-details">
              <label>Card Number</label>
              <input
                type="text"
                placeholder="Card Number"
                value={cardDetails.number}
                onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
              />
              <label>Expiry Date</label>
              <input
                type="text"
                placeholder="MM/YY"
                value={cardDetails.expiry}
                onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
              />
              <label>CVV</label>
              <input
                type="text"
                placeholder="CVV"
                value={cardDetails.cvv}
                onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
              />
            </div>
          )}
        </section>

        <button onClick={handleDonate}>Donate Now</button>

        {isSuccess && (
          <div className="success-message">
            <h2>Thank you for your donation!</h2>
            <p>Your contribution has been successfully processed.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Donate;
