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
import TextField from "@mui/material/TextField"; 

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  
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
        console.error('Error fetching campaigns',error);
        setLoading(false);
      });
  }, []); 

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);

  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredcampaigns = campaigns.length > 0
    ? campaigns.filter((campaign) => {
        return (
          campaign.id?.toString().includes(searchTerm.toString()) ||
          campaign.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          campaign.description?.toLowerCase().includes(
            searchTerm.toLowerCase()
          )
        );
      })
    : campaigns;

 

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
          <div className="searchbar">
              <input
                type="text"
                placeholder="Search Campaigns"
                value={searchTerm}
                onChange={handleSearchChange}
                style={{
                  width: '100%', 
                  padding: '8px', 
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  marginBottom: '10px'
                }}
              />
            </div>
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
                {filteredcampaigns.map((campaign, index) => (
                  <TableRow key={campaign.id}>
                    <TableCell className="tableCell">{campaign.name}</TableCell>
                    <TableCell className="tableCell">
                    <div className="cellWrapper">
                    <img
             src={`http://localhost:5000/uploads/${campaign.image}`} 
            alt="Campaign Image" // Use a more descriptive alt text
            className="image"
          />
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