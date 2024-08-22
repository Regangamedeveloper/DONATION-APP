import "./campaigns.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useState, useEffect } from "react";
import Adminfooter from "../../../Admin/components/Adminfooter";
import axios from "axios";
import Nav from "../../components/nav/Nav";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get("http://localhost:5000/campaigns") 
      .then((res) => {
        // Format dates before setting the state
        const formattedCampaigns = res.data.data.map((campaign) => ({
          ...campaign,
          registeredDate: new Date(campaign.registeredDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit' 
          }),
          endDate: new Date(campaign.endDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit' // Only include year, month, and day
          })
        }));
        setCampaigns(formattedCampaigns);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []); 

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <div className="campaigns">
      <Sidebar />
      <div className="campaignsContainer">
        <Nav />
        <div className="top">
          <h1>CAMPAIGN DETAILS</h1>
        </div>

        <div className="bottom">
          <TableContainer className="table">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="tablell">Campaign Name</TableCell>
                  <TableCell className="tablell">Campaign Picture</TableCell>
                  <TableCell className="tablell">Campaign Description</TableCell>
                  <TableCell className="tablell">Amount</TableCell>
                  <TableCell className="tablell">Amount Collected</TableCell>
                  <TableCell className="tablell">End Date</TableCell>
                  <TableCell className="tablell">Registered Date & Time</TableCell>
                  <TableCell className="tablell">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {campaigns.map((campaign, index) => (
                  <TableRow key={campaign.id}>
                    <TableCell className="tableCell">{campaign.name}</TableCell>
                    <TableCell className="tableCell">
                      <div className="cellWrapper">
                        <img src={campaign.image} alt="" className="image" />
                      </div>
                    </TableCell>
                    <TableCell className="tableCell">{campaign.description}</TableCell>
                    <TableCell className="tableCell">
                      {formatCurrency(campaign.amount)}
                    </TableCell>
                    <TableCell className="tableCell">
                      {formatCurrency(campaign.amountCollected)}
                    </TableCell>
                    <TableCell className="tableCell">{campaign.endDate}</TableCell>
                    <TableCell className="tableCell">{campaign.registeredDate}</TableCell>
                    <TableCell className="tableCell">
                      <span className={`status ${campaign.status}`}>
                        {campaign.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <Adminfooter />
      </div>
    </div>
  );
};

export default Campaigns;