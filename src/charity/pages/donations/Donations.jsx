import React, { useState, useEffect } from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Sidebar from "../../components/sidebar/Sidebar";
import "./donations.scss";
import Adminfooter from '../../../Admin/components/Adminfooter';
import Nav from '../../components/nav/Nav';
import axios from 'axios'; 
const Donations = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingDonationId, setEditingDonationId] = useState(null);
  const [editedDonationData, setEditedDonationData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [campaigns, setCampaigns] = useState([]);
  const [showModal, setShowModal] = useState(false); 

  useEffect(() => {
    const fetchDonations = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/donations'); 
        setDonations(response.data);
        console.log('donations', donations )
      } catch (error) {
        console.error('Error fetching donations:', error);
        // Handle error (e.g., display an error message)
      } finally {
        setLoading(false);
      }
    };

    const fetchCampaigns = async () => {
      try {
        const response = await axios.get('http://localhost:5000/campaigns'); 
        setCampaigns(response.data.data); // Assuming campaigns are nested under 'data'
      } catch (error) {
        console.error('Error fetching campaigns:', error);
        // Handle error (e.g., display an error message)
      }
    };

    fetchDonations();
    fetchCampaigns();
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };
;
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtering logic (search multiple columns)
  const filtereddonations = donations.length > 0
    ? donations.filter((donation) => {
      return (
        donation.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donation.charityProgram?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donation.paymentMethod?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donation.dedication?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donation.paid?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donation.status?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        formatCurrency(donation.donationAmount)?.includes(searchTerm.toLowerCase()) 
      );
    })
    : donations;

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white', 
    border: '2px solid #ccc', 
    boxShadow: 24,
    padding: '20px', 
    borderRadius: '5px', 
  };

  return (
    <div className="donations">
      <Sidebar />
      <div className="donationsContainer">
        <Nav />
        <div className="top">
          <h1>DONATION DETAILS</h1>
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
                  <TableCell className="tablell">Donor</TableCell>
                  <TableCell className="tablell">Campaign Name</TableCell>
                  <TableCell className="tablell">Payment Mode</TableCell>
                  <TableCell className="tablell">Donated Amount</TableCell>
                  <TableCell className="tablell">Paid On</TableCell>
                  <TableCell className="tablell">Status</TableCell>
                 
                </TableRow>
              </TableHead>
                  <TableBody>
                {filtereddonations.map((donation) => (
                  <TableRow key={donation.id}>
                    <TableCell className="tableCell">{donation.name}</TableCell>
                    <TableCell className="tableCell">{donation.charityProgram}</TableCell>
                    <TableCell className="tableCell">{donation.paymentMethod}</TableCell>
                    <TableCell className="tableCell">{formatCurrency(donation.donationAmount)}</TableCell>
                    <TableCell className="tableCell">{donation.timestamp}</TableCell>
                    <TableCell className="tableCell">
                      <span className={`status ${donation.status.toLowerCase()}`}>{donation.status}</span>
                    </TableCell>
                    <TableCell className="tableCell">{donation.spent}</TableCell>
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

export default Donations;

