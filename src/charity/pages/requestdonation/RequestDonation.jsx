import "./requestdonation.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Sidebar from "../../components/sidebar/Sidebar";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { rows as initialRows } from "../../components/request";
import Adminfooter from "../../../Admin/components/Adminfooter";
import Nav from "../../components/nav/Nav";

const RequestDonation = () => {
  const [selectedValues, setSelectedValues] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [rows] = useState(initialRows);

  const handleChange = (event, rowId) => {
    const value = event.target.value;
    
    // Check if "All Donors" was selected
    if (value === "all") {
      // Select all donor options for this row
      setSelectedValues({
        ...selectedValues,
        [rowId]: ["option1", "option2", "option3", "option4"], // Adjust according to available options
      });
    } else {
      // Set the selected specific donor
      setSelectedValues({
        ...selectedValues,
        [rowId]: value,
      });
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRows = rows.filter((row) => {
    return (
      row.id.toString().includes(searchTerm) ||
      row.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="requestdonation">
      <Sidebar />
      <div className="requestdonationContainer">
        <Nav />
        <div className="top">
          <h1>REQUEST DONATION DETAILS</h1>
        </div>

        <div className="bottom">
          <TableContainer className="table">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="tablell">Select Donor</TableCell>
                  <TableCell className="tablell">Select Campaign</TableCell>
                  <TableCell className="tablell">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="tableCell">
                      <select
                        value={selectedValues[row.name] || "none"}
                        onChange={(event) => handleChange(event, row.name)}
                      >
                        <option value="none">Select Donor</option>
                        <option value="all">All Donors</option> {/* New "All Donors" option */}
                        <option value="option1">DARWIN</option>
                        <option value="option2">PAUL</option>
                        <option value="option3">REGAN</option>
                        <option value="option4">SHAYNAZ</option>
                        {/* Add more donor options as needed */}
                      </select>
                    </TableCell>
                    <TableCell className="tableCell">
                      <select
                        value={selectedValues[row.id] || "none"}
                        onChange={(event) => handleChange(event, row.id)}
                      >
                        <option value="none">Select Campaign</option>
                        <option value="all">All Campaigns</option> {/* New "All Donors" option */}
                        <option value="option1">Education</option>
                        <option value="option2">Health</option>
                        <option value="option3">Land</option>
                        <option value="option4">Water</option>
                        {/* Add more campaign options as needed */}
                      </select>
                    </TableCell>
                    <TableCell className="tableCell">
       
                      <Button variant="contained" sx={{backgroundColor:'#007b5f'}}>
                        Request
                      </Button>
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

export default RequestDonation;
