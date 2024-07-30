import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './donate.scss';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donationFrequency, setDonationFrequency] = useState('one-time');
  const [charityProgram, setCharityProgram] = useState('');
  const [dedication, setDedication] = useState('');

  const handleDonate = () => {
    // Handle donation logic
  };

  return (
    <div className="donate-page">
      <Navbar />
      <div className="donate-content">
        <h1>Donate to a Charity Program</h1>

        <section className="program-details">
          <h2>Select a Program</h2>
          {/* Example program listing */}
          <div className="program-list">
            <div
              className={`program ${charityProgram === 'Education Program' ? 'selected' : ''}`}
              onClick={() => setCharityProgram('Education Program')}
            >
              <h3>Education Program</h3>
              <p>Providing education resources to underprivileged children.</p>
            </div>
            <div
              className={`program ${charityProgram === 'Health Program' ? 'selected' : ''}`}
              onClick={() => setCharityProgram('Health Program')}
            >
              <h3>Health Program</h3>
              <p>Ensuring healthcare access in remote areas.</p>
            </div>
            {/* Add more programs as needed */}
          </div>
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
          {/* Payment method selection */}
        </section>

        <button onClick={handleDonate}>Donate Now</button>

        {/* <section className="additional-options">
          <h2>Other Options</h2>
          <ul>
            <li>Corporate Matching</li>
            <li>Volunteer Opportunities</li>
            <li>Subscribe to Newsletter</li>
          </ul>
        </section> */}
      </div>
    </div>
  );
};

export default Donate;
