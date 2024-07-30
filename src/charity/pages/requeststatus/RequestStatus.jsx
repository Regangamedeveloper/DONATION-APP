import React, { useState } from "react";
import "./requeststatus.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField"; 
import { rows as initialRows } from "../../components/status"; 

const RequestStatus = () => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [rows] = useState(initialRows); 

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRows = rows.filter((row) => {
    return (
      row.id.toString().includes(searchTerm) || // Search ID as a string
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.campaign.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.donor.toLowerCase().includes(searchTerm.toLowerCase()) 
      // Add other searchable fields as needed
    );
  });

  return (
    <div className="requeststatus">
      <Sidebar />
      <div className="requeststatusContainer">
        <Navbar />
        <div className="top">
          <h1>REQUEST STATUS DETAILS</h1>
        </div>

        <div className="bottom">
          <TableContainer className="table">
          <div className="bar">
          <TextField
            label="Search Requests"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{ width: "50%", mb: 2 }}
          />
          </div>
            <Table>
              <TableHead>
              <TableRow>
        <TableCell className="tablell">ID</TableCell>
        <TableCell className="tablell">Charity Name</TableCell>
        <TableCell className="tablell">Campaign Name</TableCell>
        <TableCell className="tablell">Compaign Pic</TableCell>
        <TableCell className="tablell">Amount Needed </TableCell>
        <TableCell className="tablell">Donor Name</TableCell>
        <TableCell className="tablell">Registered Date&Time</TableCell>
      </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="tableCell">{row.id}</TableCell>
                    <TableCell className="tableCell">{row.name}</TableCell>
                    <TableCell className="tableCell">{row.campaign}</TableCell>
                    <TableCell className="tableCell">
                      <div className="cellWrapper">
                        <img src={row.img} alt="" className="image" />
                      </div>
                    </TableCell>
                    <TableCell className="tableCell">{formatCurrency(row.amount)}</TableCell>
                    <TableCell className="tableCell">{row.donor}</TableCell>
                    <TableCell className="tableCell">
                      {row.registeredDate}
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

export default RequestStatus;