import React from "react";
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Featured = () => {
  return (
    <div className="featured-wrapper">
      {/* Donation Chart (Card 1) */}
      <div className="featured">
        <div className="top">
          <h1 className="title">Total Donations</h1>
          <MoreVertIcon fontSize="small" />
        </div>
        <div className="bottom">
          <div className="featuredChart">
            <CircularProgressbar value={20} text={"20%"} strokeWidth={5} />
          </div>
          <p className="title">Total Donations made today</p>
          <p className="amount">$420</p>
          <p className="desc">
            Previous transactions processing. Last donations may not be included.
          </p>
          <div className="summary">
            <div className="item">
              <div className="itemTitle">Target</div>
              <div className="itemResult negative">
                <KeyboardArrowDownIcon fontSize="small" />
                <div className="resultAmount">$12.4k</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Last Week</div>
              <div className="itemResult positive">
                <KeyboardArrowUpOutlinedIcon fontSize="small" />
                <div className="resultAmount">$12.4k</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">Last Month</div>
              <div className="itemResult positive">
                <KeyboardArrowUpOutlinedIcon fontSize="small" />
                <div className="resultAmount">$12.4k</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Campaign Chart (Card 3) */}
      <div className="featured">
  <div className="top">
    <h1 className="title">Campaigns Progress</h1>
    <MoreVertIcon fontSize="small" />
  </div>
  <div className="bottom">
    <div className="featuredChart">
      {/* Showing 80% of active campaigns out of the total */}
      <CircularProgressbar 
        value={80} 
        text={`${80}%`} 
        strokeWidth={5} 
        styles={{
          path: { stroke: "#28a745" }, // Green color for active campaigns
          text: { fill: "#28a745", fontSize: '20px' }
        }} 
      />
    </div>
    <p className="title">Total Campaigns Created</p>
    <p className="amount">150</p>
    <p className="desc">
      Some campaigns are still processing, last donations may not be included.
    </p>
    <div className="summary">
      {/* Active Campaigns */}
      <div className="item">
        <div className="itemTitle">Active</div>
        <div className="itemResult positive">
          <KeyboardArrowUpOutlinedIcon fontSize="small" style={{ color: "green" }} />
          <div className="resultAmount">120</div>
        </div>
      </div>
      {/* Completed Campaigns */}
      <div className="item">
        <div className="itemTitle">Completed</div>
        <div className="itemResult neutral">
          <CheckCircleIcon fontSize="small" style={{ color: "#007b5f" }} />
          <div className="resultAmount">30</div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* donor Chart (Card 2) */}
      <div className="featured">
        <div className="top">
          <h1 className="title">Target Number of Donors</h1>
          <MoreVertIcon fontSize="small" />
        </div>
        <div className="bottom">
          <div className="featuredChart">
            <CircularProgressbar value={56} text={"56%"} strokeWidth={5} />
          </div>
          <p className="title">Total number of Donors Available
          </p>
          <p className="amount">150</p>
          <p className="desc">
            Previous transactions processing. Last donations may not be included.
          </p>
          <div className="summary">
            <div className="item">
              <div className="itemTitle">Active</div>
              <div className="itemResult positive">
                <KeyboardArrowUpOutlinedIcon fontSize="small" />
                <div className="resultAmount">120</div>
              </div>
            </div>
            <div className="item">
              <div className="itemTitle">dormant</div>
              <div className="itemResult negative">
                <KeyboardArrowDownIcon fontSize="small" />
                <div className="resultAmount">30</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;