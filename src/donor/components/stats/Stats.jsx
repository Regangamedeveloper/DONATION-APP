import React from 'react';
import CountUp from 'react-countup';
import './stats.scss';

const Stats = () => {
  const stats = [
    { icon: './icons/marketing.png', value: 64, label: 'Successful Campaigns' },
    { icon: './icons/md.png', value: 210, label: 'Money Donated' },
    { icon: './icons/donors.png', value: 100, label: 'Donors' },
    { icon: './icons/donation.png', value: 325, label: 'Donations Received' },
  ];

  return (
    <div className="stats-section">
      <h2 className="section-title">Achievements So Far</h2>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <div className="stat-icon"><img src={stat.icon} alt={`${stat.label} icon`} /></div>
            <div className="stat-value">
              <CountUp end={stat.value} duration={3} suffix="+" />
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
