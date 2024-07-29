import "./campaigns.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {  rows as initialRows } from "../../components/campaign";
const Campaigns = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [rows] = useState(initialRows);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRows = rows.filter((row) => {
    return (
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.status.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
  });

  return (
    <div className="campaigns">
      <Sidebar />
      <div className="campaignsContainer">
        <Navbar />
        <div className="top">
          <h1>FUNDRAISING CAMPAIGN DETAILS</h1>
        </div>

        <div className="bottom">
          <TableContainer className="table">
          <div className="bar">
          <TextField
            label="Search Campaigns"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{ width: "50%", mb: 2 }}
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
                {filteredRows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="tableCell">{row.name}</TableCell>
                    <TableCell className="tableCell">
                      <div className="cellWrapper">
                        <img src={row.img} alt="" className="image" />
                      </div>
                    </TableCell>
                    <TableCell className="tableCell">{row.description}</TableCell>
                    <TableCell className="tableCell">{row.amount}</TableCell>
                    <TableCell className="tableCell">{row.amountCollected}</TableCell>
                    <TableCell className="tableCell">{row.EndDate}</TableCell>
                    <TableCell className="tableCell">{row.registeredDate}</TableCell>
                    <TableCell className="tableCell">
                    <span className={`status ${row.status}`}>{row.status}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;