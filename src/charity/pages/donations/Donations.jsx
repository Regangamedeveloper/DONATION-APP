import React, { useState } from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Sidebar from "../../components/sidebar/Sidebar";
import "./donations.scss";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Adminfooter from '../../../Admin/components/Adminfooter';
import Nav from '../../components/nav/Nav';
const Donations = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingDonationId, setEditingDonationId] = useState(null);
  const [editedDonationData, setEditedDonationData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  const handleUpdateClick = (donationId) => {
    setEditingDonationId(donationId);
    const donationToUpdate = donations.find((donation) => donation.id === donationId);
    setEditedDonationData(donationToUpdate);
  };

  const handleCloseModal = () => {
    setEditingDonationId(null);
    setEditedDonationData({});
  };

  const handleChangeFormData = (event) => {
    setEditedDonationData({
      ...editedDonationData,
      [event.target.name]: event.target.value
    });
  };

  const handleSaveUpdate = () => {
    const updateddonations = donations.map((donation) =>
      donation.id === editingDonationId ? editedDonationData : donation );
    setDonations(updateddonations);
    handleCloseModal();
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtering logic (search multiple columns)
    const filtereddonations = donations.length > 0
    ? donations.filter((donation) => {
    return (
      donation.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.campaign?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.mode?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.for?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.on?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.paid?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donation.status?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      formatCurrency(donation.amount)?.includes(searchTerm.toLowerCase()) 
    );
  })
:donations;
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
        <Nav/>
        <div className="top">
          <h1>DONATION DETAILS</h1>
        </div>

        <div className="bottom">
          <TableContainer className="table">
          <div className="searchbar">
          <TextField
            label="Search Donations"
            variant="filled"
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
                  <TableCell className="tablell">Spent On</TableCell>
                  <TableCell className="tablell">Update</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filtereddonations.map((donation) => (
                  <TableRow key={donation.id}>
                    <TableCell className="tableCell">{donation.name}</TableCell>
                    <TableCell className="tableCell">{donation.charityProgram}</TableCell>
                    <TableCell className="tableCell">{donation.paymentMethod}</TableCell>
                    <TableCell className="tableCell">
                      {formatCurrency(donation.donationAmount)}
                    </TableCell>
                    <TableCell className="tableCell">{donation.paid}</TableCell>
                    <TableCell className="tableCell">
                      <span className={`status ${donation.status.toLowerCase()}`}>
                        {donation.status}
                      </span>
                    </TableCell>
                    <TableCell className="tableCell">{donation.spent}</TableCell>
                    <TableCell className="tableCell">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleUpdateClick(donation.id)}
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
        <Modal open={editingDonationId !== null} onClose={handleCloseModal}>
          <Box sx={modalStyle}>
            <h2>Update Donation</h2>

            <TextField
              label="Charity Name"
              name="name"
              value={editedDonationData.name || ''}
              onChange={handleChangeFormData}
              fullWidth
              margin="normal"
            />
            <TextField
              label="charityProgram"
              name=""
              value={editedDonationData.campaign || ''}
              onChange={handleChangeFormData}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Payment Mode"
              name="paymentMethod"
              value={editedDonationData.mode || ''}
              onChange={handleChangeFormData}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Spent On"
              name="spent"
              value={editedDonationData.on || ''}
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