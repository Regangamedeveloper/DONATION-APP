import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './donationrequest.scss';

const DonationRequest = () => {
  const [requests, setRequests] = useState([
    // Example data
    {
      id: 1,
      programName: 'Education Program',
      programPicture: '/images/edu.jfif', // Placeholder image path
      amountNeeded: 50000000,
      requestDate: '2024-07-20',
      status: 'pending',
    },
    {
      id: 2,
      programName: 'Health Program',
      programPicture: '/images/health.jfif', // Placeholder image path
      amountNeeded: 100000000,
      requestDate: '2024-07-21',
      status: 'pending',
    },
  ]);

  const [donationAmounts, setDonationAmounts] = useState({});

  useEffect(() => {
    // Fetch donation requests from an API or database
    // setRequests(fetchedRequests);
  }, []);

  const handleAmountChange = (id, amount) => {
    setDonationAmounts({
      ...donationAmounts,
      [id]: amount,
    });
  };

  const handleDonate = (id) => {
    const amount = donationAmounts[id];
    if (amount) {
      // Handle donation logic, e.g., send to API
      console.log(`Donated ${amount} to request ID ${id}`);
    }
  };

  const handleAccept = (id) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: 'accepted' } : request
      )
    );
  };

  const handleReject = (id) => {
    setRequests((prevRequests) =>
      prevRequests.filter((request) => request.id !== id)
    );
  };

  return (
    <div className="donation-request-page">
      <Navbar />
      <div className="donation-request-content">
        <h1>Donation Requests</h1>
        <table className="request-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Program Name</th>
              <th>Program Picture</th>
              <th>Amount Needed</th>
              <th>Your Donation</th>
              <th>Request Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td>{request.programName}</td>
                <td>
                  <img
                    src={request.programPicture}
                    alt={request.programName}
                    className="program-picture"
                  />
                </td>
                <td>{request.amountNeeded.toLocaleString()}</td>
                <td>
                  {request.status === 'accepted' && (
                    <input
                      type="number"
                      value={donationAmounts[request.id] || ''}
                      onChange={(e) =>
                        handleAmountChange(request.id, e.target.value)
                      }
                      placeholder="Enter amount"
                    />
                  )}
                </td>
                <td>{request.requestDate}</td>
                <td>
                  {request.status === 'pending' && (
                    <>
                      <button
                        onClick={() => handleAccept(request.id)}
                        className="accept-button"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleReject(request.id)}
                        className="reject-button"
                      >
                        Reject
                      </button>
                    </>
                  )}
                  {request.status === 'accepted' && (
                    <button
                      onClick={() => handleDonate(request.id)}
                      className="donate-button"
                    >
                      Donate
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonationRequest;
