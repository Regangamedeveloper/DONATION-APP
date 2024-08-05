import React from 'react'
import './progressbar.scss';

const Progressbar = ({ percentage }) => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-fill" style={{ width: `${percentage}%` }}>
        <span className="progress-bar-text">{percentage}%</span>
      </div>
    </div>
  );
}

export default Progressbar;