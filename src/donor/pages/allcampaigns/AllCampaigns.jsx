import React, { useState } from 'react';
import './allcampaigns.scss';
import Navbar from '../../components/navbar/Navbar';
import Donate from '../../components/donatemodal/DonateModal';
import { useNavigate } from 'react-router-dom';  

const AllCampaigns = () => {
  // State to manage the visibility of the Donate modal
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  // Function to open the Donate modal
  const handleOpenDonateModal = () => {
    setIsDonateOpen(true);
  };

  // Function to close the Donate modal
  const handleCloseDonateModal = () => {
    setIsDonateOpen(false);
  };

  const causes = [
    {
      title: 'Make-clean-water-accessible',
      description: 'Provide clean water to rural villages.',
      image: '/images/borehole.jpg',
      raised: '16.78M',
      goal: '20M',
      progress: '83%',
      id: 'make-clean-water-accessible', 
    },
    {
      title: 'Education for all',
      description: 'Support education for underprivileged children.',
      image: '/images/needy xul kid.jpg',
      raised: '32.1M',
      goal: '75M',
      progress: '70%',
      id: 'education-for-all',
    },
    {
      title: 'Save the forgotten',
      description: 'Helping the homeless and neglected in urban areas.',
      image: '/images/needy.jpg',
      raised: '56.8M',
      goal: '70M',
      progress: '83%',
      id: 'save-the-forgotten',
    },
    {
      title: 'Make-clean-water-accessible',
      description: 'Provide clean water to rural villages.',
      image: '/images/borehole.jpg',
      raised: '16.78M',
      goal: '20M',
      progress: '83%',
      id: 'make-clean-water-accessible', 
    },
    {
      title: 'Education for all',
      description: 'Support education for underprivileged children.',
      image: '/images/needy xul kid.jpg',
      raised: '32.1M',
      goal: '75M',
      progress: '70%',
      id: 'education-for-all',
    },
    {
      title: 'Save the forgotten',
      description: 'Helping the homeless and neglected in urban areas.',
      image: '/images/needy.jpg',
      raised: '56.8M',
      goal: '70M',
      progress: '83%',
      id: 'save-the-forgotten',
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="campaigns-page">
      <Navbar />
      <div className="causes">
        <h2>Our Causes</h2>
        <div className="cards">
          {causes.map((cause, index) => (
            <div className="card" key={index}>
              <div className="card-image">
                <img src={cause.image} alt={cause.title} />
                <div className="card-buttons">
                  <button className="btn-donate" onClick={handleOpenDonateModal}>
                    Donate Now
                  </button>
                  <button onClick={() => navigate(`/campaigns/${cause.id}`)} className="btn-read-more">Read More</button>
                </div>
              </div>
              <div className="card-content">
                <h3>{cause.title}</h3>
                <p>{cause.description}</p>
                <div className="progress">
                  <div className="progress-bar" style={{ width: cause.progress }}></div>
                  <div className="progress-info">
                    <span>Raised: {cause.raised}</span>
                    <span>Goal: {cause.goal}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reusable Donate modal component */}
      <Donate open={isDonateOpen} onClose={handleCloseDonateModal} />
    </div>
  );
};

export default AllCampaigns;