import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './trackdonation.scss';

const TrackDonation = () => {
  const [donations, setDonations] = useState([
    // Example data
    {
      id: 1,
      programName: 'Education Program',
      amountDonated: 1000000,
      donationDate: '2024-07-25',
      status: 'In Progress',
      impact: 'Funding textbooks for underprivileged children.',
    },
    {
      id: 2,
      programName: 'Health Program',
      amountDonated: 50000000,
      donationDate: '2024-07-30',
      status: 'Completed',
      impact: 'Purchased medical supplies for remote clinics.',
    },
  ]);

  useEffect(() => {
    // Fetch donation tracking data from an API or database
    // setDonations(fetchedDonations);
  }, []);

  return (
    <div className="track-donation-page">
      <Navbar />
      <div className="track-donation-content">
        <h1>Track Your Donations</h1>
        <table className="donation-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Program Name</th>
              <th>Amount Donated</th>
              <th>Donation Date</th>
              <th>Status</th>
              <th>Impact</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr key={donation.id}>
                <td>{donation.id}</td>
                <td>{donation.programName}</td>
                <td>{donation.amountDonated.toLocaleString()}</td>
                <td>{donation.donationDate}</td>
                <td>{donation.status}</td>
                <td>{donation.impact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrackDonation;
