import React from 'react';
import "./lid.scss";

const Lid = () => {
  return (
    <div className="banner-container">
      {/* Background Image */}
      <div className="banner-background"></div>

      {/* Text and Button */}
      <div className="banner-content">
        <h1 className="banner-title">Make a Difference Today</h1>
        <p className="banner-subtitle">Your donation can change lives.</p>
        <button className="banner-button">Donate Now</button>
      </div>
    </div>
  );
};

export default Lid;
