import React from 'react';
import './donorfeedback.scss';

const DonorFeedback = () => {
  // Sample feedback data
  const feedbacks = [
    {
      name: 'Paulo Escobar',
      rating: 5,
      comment: 'Amazing work, really happy to be part of this initiative!',
    },
    {
      name: 'St.Luic',
      rating: 4,
      comment: 'Great cause, but more updates on progress would be helpful.',
    },
    {
      name: 'Emily&Sons',
      rating: 5,
      comment: 'Truly fulfilling to contribute to these causes. Keep it up!',
    },
    {
        name: 'Sequlio, Sicili',
        rating: 2,
        comment: 'Amazing work, really happy to be part of this initiative!',
      },
      {
        name: 'Anonymous',
        rating: 1,
        comment: 'Great cause, but more updates on progress would be helpful.',
      },
      {
        name: 'LaPorte Advocates',
        rating: 3,
        comment: 'Truly fulfilling to contribute to these causes. Keep it up!',
      },
  ];

  return (
    <div className="donor-feedback">
      <h2>Donor Feedback</h2>
      <div className="feedback-list">
        {feedbacks.map((feedback, index) => (
          <div className="feedback-card" key={index}>
            <div className="feedback-header">
              <h3>{feedback.name}</h3>
              <div className="rating">
                {'⭐'.repeat(feedback.rating)}
              </div>
            </div>
            <p>{feedback.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonorFeedback;
