import React from "react";
import { useState, useEffect } from "react";
import "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CampaignProgress = ({ campaign }) => {
  const { name, targetAmount, raisedAmount, daysLeft, status } = campaign;
  const progressPercentage = (raisedAmount / targetAmount) * 100;

  return (
    <div className="campaign-progress">
      <h3>{name}</h3>
      <p >Target: UGX  <span className={`targetAmount ${targetAmount}`}>{targetAmount}</span></p>
      <p >Raised: UGX <span className={`raisedAmount ${raisedAmount}`}>{raisedAmount}</span></p>
      <p>Days Left: {daysLeft}</p>
      <p>Status <span className={`status ${status}`}>{status}</span></p>
      <div className="progress-bar">
        <CircularProgressbar
          value={progressPercentage}
          text={`${Math.round(progressPercentage)}%`}
          styles={{
            path: {
              stroke: "green", // Blue color for the progress bar
            },
            text: {
              fill: "#333", // Dark gray color for the text
              fontSize: "16px",
            },
            trail: {
              stroke: "#eee", // Light gray color for the trail
            },
          }}
        />
      </div>
    </div>
  );
};

const CampaignDashboard = ({ campaigns }) => {
  const [filter, setFilter] = useState("all");
  const [filteredCampaigns, setFilteredCampaigns] = useState(campaigns);

  useEffect(() => {
    setFilteredCampaigns(
      filter === "all"
        ? campaigns
        : campaigns.filter((campaign) => campaign.status === filter)
    );
  }, [filter, campaigns]);

  const totalRaised = campaigns.reduce(
    (acc, campaign) => acc + campaign.raisedAmount,
    0
  );

  return (
    <div className="featured">
      <h2>CAMPAIGN DASHBOARD</h2>
      <div className="filter-container">
          <label style={{ color:"green", marginLeft:'800px' }}>Filter by Status:</label>
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="total-raised">
          <p>Total Raised: UGX<span className={` totalRaised ${ totalRaised}`}>{  totalRaised}</span></p>
        </div>
      <div className="campaign-dashboard">
        <div className="campaigns">
          {filteredCampaigns.map((campaign) => (
            <CampaignProgress key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Example usage:
const campaigns = [
  {
    id: 1,
    name: "Campaign A",
    targetAmount: 50000000,
    raisedAmount: 1000000,
    daysLeft: 10,
    status: "active",
  },
  {
    id: 2,
    name: "Campaign B",
    targetAmount: 20000000,
    raisedAmount: 2000000,
    daysLeft: 56,
    status: "active",
  },
  {
    id: 3,
    name: "Campaign C",
    targetAmount: 20000000,
    raisedAmount: 20000000,
    daysLeft: 0,
    status: "completed",
  },
  {
    id: 4,
    name: "Campaign D",
    targetAmount: 20000000,
    raisedAmount: 20000000,
    daysLeft: 0,
    status: "completed",
  },
  {
    id: 5,
    name: "Campaign E",
    targetAmount: 20000000,
    raisedAmount: 20000,
    daysLeft: 0,
    status: "active",
  },
  {
    id: 6,
    name: "Campaign F",
    targetAmount: 20000000,
    raisedAmount: 20000,
    daysLeft: 67,
    status: "active",
  },
  {
    id: 7,
    name: "Campaign K",
    targetAmount: 20000000,
    raisedAmount: 20000000,
    daysLeft: 0,
    status: "completed",
  },
  {
    id: 8,
    name: "Campaign P",
    targetAmount: 20000000,
    raisedAmount: 20000000,
    daysLeft: 0,
    status: "completed",
  },
  {
    id: 9,
    name: "Campaign R",
    targetAmount: 20000000,
    raisedAmount: 20000000,
    daysLeft: 0,
    status: "completed",
  },
  {
    id: 10,
    name: "Campaign E",
    targetAmount: 20000000,
    raisedAmount: 20000000,
    daysLeft: 0,
    status: "completed",
  },
 
];

const App = () => (
  <div>
    <CampaignDashboard campaigns={campaigns} />
  </div>
);

export default App;