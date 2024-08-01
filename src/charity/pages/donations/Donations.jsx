import React, { useState } from 'react';
import Navbar from "../../components/navbar/Navbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Sidebar from "../../components/sidebar/Sidebar";
import "./donations.scss";
import { rows as initialRows } from "../../components/donations"; 
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Adminfooter from '../../../Admin/components/Adminfooter';

const Donations = () => {
  const [rows, setRows] = useState(initialRows);
  const [editingRowId, setEditingRowId] = useState(null);
  const [editedRowData, setEditedRowData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  const handleUpdateClick = (rowId) => {
    setEditingRowId(rowId);
    const rowToUpdate = rows.find((row) => row.id === rowId);
    setEditedRowData(rowToUpdate);
  };

  const handleCloseModal = () => {
    setEditingRowId(null);
    setEditedRowData({});
  };

  const handleChangeFormData = (event) => {
    setEditedRowData({
      ...editedRowData,
      [event.target.name]: event.target.value
    });
  };

  const handleSaveUpdate = () => {
    const updatedRows = rows.map((row) =>
      row.id === editingRowId ? editedRowData : row
    );
    setRows(updatedRows);
    handleCloseModal();
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtering logic (search multiple columns)
  const filteredRows = rows.filter((row) => {
    const searchTermLower = searchTerm.toLowerCase();

    return (
      row.name.toLowerCase().includes(searchTermLower) ||
      row.campaign.toLowerCase().includes(searchTermLower) ||
      row.mode.toLowerCase().includes(searchTermLower) ||
      row.for.toLowerCase().includes(searchTermLower) ||
      row.on.toLowerCase().includes(searchTermLower) ||
      row.paid.toLowerCase().includes(searchTermLower) ||
      row.status.toLowerCase().includes(searchTermLower) ||
      formatCurrency(row.amount).includes(searchTermLower) 
    );
  });


  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="donations">
      <Sidebar />
      <div className="donationsContainer">
        <Navbar />
        <div className="top">
          <h1>DONATION DETAILS</h1>
        </div>

        <div className="bottom">
          <TableContainer className="table">
          <div className="bar">
          <TextField
            label="Search Donations"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{ width: "50%", mb: 2 }}
          />
          </div>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="tablell">Charity Name</TableCell>
                  <TableCell className="tablell">Campaign Name</TableCell>
                  <TableCell className="tablell">Payment Mode</TableCell>
                  <TableCell className="tablell">Donation Amount</TableCell>
                  <TableCell className="tablell">Paid On</TableCell>
                  <TableCell className="tablell">Status</TableCell>
                  <TableCell className="tablell">Spent For</TableCell>
                  <TableCell className="tablell">Spent On</TableCell>
                  <TableCell className="tablell">Update</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="tableCell">{row.name}</TableCell>
                    <TableCell className="tableCell">{row.campaign}</TableCell>
                    <TableCell className="tableCell">{row.mode}</TableCell>
                    <TableCell className="tableCell">
                      {formatCurrency(row.amount)}
                    </TableCell>
                    <TableCell className="tableCell">{row.paid}</TableCell>
                    <TableCell className="tableCell">
                      <span className={`status ${row.status.toLowerCase()}`}>
                        {row.status}
                      </span>
                    </TableCell>
                    <TableCell className="tableCell">{row.for}</TableCell>
                    <TableCell className="tableCell">{row.on}</TableCell>
                    <TableCell className="tableCell">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleUpdateClick(row.id)}
                      >
                        Update
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div> 

        {/* Update Modal */}
        <Modal open={editingRowId !== null} onClose={handleCloseModal}>
          <Box sx={modalStyle}>
            <h2>Update Donation</h2>

            <TextField
              label="Charity Name"
              name="name"
              value={editedRowData.name || ''}
              onChange={handleChangeFormData}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Campaign Name"
              name="campaign"
              value={editedRowData.campaign || ''}
              onChange={handleChangeFormData}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Payment Mode"
              name="mode"
              value={editedRowData.mode || ''}
              onChange={handleChangeFormData}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Spent For"
              name="for"
              value={editedRowData.for || ''}
              onChange={handleChangeFormData}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Spent On"
              name="on"
              value={editedRowData.on || ''}
              onChange={handleChangeFormData}
              fullWidth
              margin="normal"
            />

            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveUpdate}
            >
              Save
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleCloseModal}
            >
              Cancel
            </Button>
          </Box>
        </Modal>
        <Adminfooter/>
      </div>
    </div> 
  );
};

export default Donations;