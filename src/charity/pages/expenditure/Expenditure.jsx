import React, { useState } from "react";
import "./expenditure.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Adminfooter from "../../../Admin/components/Adminfooter";
import Nav from "../../components/nav/Nav";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import {  Input, InputLabel } from '@mui/material';

const Expenditure = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      campaign: "Child Nutrition Program",
      image:"https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 1000,
      category: "Direct Program Costs",
      beneficiary: "100 children",
      impact: "100 children received 2 meals per day for 1 week",
      supportingDocument: "Invoice from rice supplier",
    },
    {
      id: 2,
      campaign: "Education Support Program",
      image:"https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 5000,
      category: "Direct Program Costs",
      beneficiary: "50 students",
      impact: "50 students received school uniforms and supplies",
      supportingDocument: "Receipt from school uniform vendor",
    },
    {
      id: 3,
      campaign: "Education Support Program",
      image:"https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 5000,
      category: "Direct Program Costs",
      beneficiary: "50 students",
      impact: "50 students received school uniforms and supplies",
      supportingDocument: "Receipt from school uniform vendor",
    },
    {
      id: 4,
      campaign: "Education Support Program",
      image:"https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 5000,
      category: "Direct Program Costs",
      beneficiary: "50 students",
      impact: "50 students received school uniforms and supplies",
      supportingDocument: "Receipt from school uniform vendor",
    },
    {
      id: 5,
      campaign: "Education Support Program",
      image:"https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      amount: 5000,
      category: "Direct Program Costs",
      beneficiary: "50 students",
      impact: "50 students received school uniforms and supplies",
      supportingDocument: "Receipt from school uniform vendor",
    },
  ]);

  const [open, setOpen] = useState(false);
  const [image , setImage] = useState("");
  const handleClose = () => setOpen(false);
  const [campaigns, setCampaigns] = useState([
    { value: 'campaign1', label: 'Campaign 1' },
    { value: 'campaign2', label: 'Campaign 2' },
    // Add more campaigns here
  ]);
  const [selectedImage, setSelectedImage] = useState(null);

  const [editingRow, setEditingRow] = useState(null); // Track row being edited
  const [newExpenditure, setNewExpenditure] = useState({
    campaign:"",
    image:"",
    amount:"",
    beneficiary: '',
    impact: '',
  });
  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]); // Update selectedImage state
  };

  const handleInputChange = (event) => {
    setNewExpenditure({
      ...newExpenditure,
      [event.target.name]: event.target.value
    });
  };

  const handleOpen = (row) => {
    setEditingRow(row);
    setNewExpenditure({
      image: row?.image || "",
      beneficiary: row?.beneficiary || "",
      impact: row?.impact || "",
    });
    setOpen(true);
  };

  const addExpenditure = () => {
    if (editingRow) {
      setRows(rows.map(row => 
        row.id === editingRow.id 
          ? { ...row, ...newExpenditure } 
          : row
      ));
    } else {
      setRows([...rows, { id: Date.now(), ...newExpenditure }]);
    }
    
    setNewExpenditure({
      campaign:"",
      image:"",
      amount:"",
      beneficiary: '',
      impact: '',
    });
    handleClose();
    setEditingRow(null);
  };

  return (
    <div className="expenditure">
      <Sidebar />
      <div className="expenditureContainer">
        <Nav />
        <div className="top">
          <h1>Expenditure Details</h1>
          <Button sx={{ backgroundColor: '#007b5f', color: 'white' }} variant="contained" onClick={() => handleOpen(null)}>
            Add Expenditure
          </Button>
        </div>

        {/* Modal */}
        <Modal
          open={open}
          onClose={handleClose}
        >
          
          <Box className="modal-box">
          <TextField
            select
            label="Campaign"
            name="campaign"
            value={newExpenditure.campaign}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          >
            {campaigns.map((campaign) => (
              <MenuItem key={campaign.value} value={campaign.value}>
                {campaign.label}
              </MenuItem>
            ))}
          </TextField>

          <InputLabel htmlFor="contained-button-file">
            Upload Impact picture
          </InputLabel>
          <TextField
            accept="image/*"
            id="contained-button-file"
            type="file"
            onChange={handleImageChange} 
          />
            <TextField
              label="Amount"
              name="amount"
              value={newExpenditure.amount}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Beneficiary"
              name="beneficiary"
              value={newExpenditure.beneficiary}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Impact"
              name="impact"
              multiline
              rows={4}
              value={newExpenditure.impact}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
          <Button
  sx={{
    backgroundColor: '#007b5f',
    color: 'white',
    '&:hover': {
      backgroundColor: 'green', // Set hover color here
    },
  }}
  variant="contained"
  onClick={addExpenditure}
>
  {editingRow ? "Update" : "Add"} Expenditure
</Button>

          </Box>
        </Modal>

        {/* Table */}
        <div className="bottom">
          <TableContainer component={Paper} style={{ maxHeight: 400 }}>
            <Table sx={{ minWidth: 650 }} stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Campaign</TableCell>
                  <TableCell>Impact Picture</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Beneficiary</TableCell>
                  <TableCell>Impact</TableCell>
                  <TableCell>Supporting Documents</TableCell>
                  <TableCell>Update</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.campaign}</TableCell>
                    <TableCell>
                      <div className="cellWrapper">
                        <img src={row.image} alt="impact" className="image" />
                      </div>
                    </TableCell>
                    <TableCell>{row.amount}</TableCell>
                    <TableCell>{row.beneficiary}</TableCell>
                    <TableCell>{row.impact}</TableCell>
                    <TableCell>
                      <a href="documents" target="_blank" rel="noopener noreferrer">
                        View Document
                      </a>
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" onClick={() => handleOpen(row)}>
                        Update
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

export default Expenditure;
