import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./transactions.scss";
import { rows as initialRows } from "../../components/transactions";
import TextField from "@mui/material/TextField"; 
import Adminfooter from "../../../Admin/components/Adminfooter";
import Nav from "../../components/nav/Nav";

const Transactions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [rows] = useState(initialRows);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRows = rows.filter((row) => {
    return (
      row.id.toString().includes(searchTerm) ||
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.campaign.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.mode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.amount.toString().includes(searchTerm) ||
      row.paid.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
  });

  return (
    <div className="transactions">
      <Sidebar />
      <div className="transactionsContainer">
       <Nav/>
        <div className="top">
          <h1>TRANSACTION DETAILS</h1>

        </div>
        <div className="bottom">
          <TableContainer className="table">
          <div className="searchbar">
          <input
                type="text"
                placeholder="Search Donations"
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
                  <TableCell className="tablell">Transaction ID</TableCell> 
                  <TableCell className="tablell">Charity Name</TableCell>
                  <TableCell className="tablell">Campaign Name</TableCell>
                  <TableCell className="tablell">Payment Mode</TableCell>
                  <TableCell className="tablell">Donation Amount</TableCell>
                  <TableCell className="tablell">Paid On</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="tableCell">{row.id}</TableCell>
                    <TableCell className="tableCell">{row.name}</TableCell>
                    <TableCell className="tableCell">{row.campaign}</TableCell>
                    <TableCell className="tableCell">{row.mode}</TableCell>
                    <TableCell className="tableCell">{row.amount}</TableCell>
                    <TableCell className="tableCell">{row.paid}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <Adminfooter/>
      </div>
    </div>
  );
};

export default Transactions;