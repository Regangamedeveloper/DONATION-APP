// AdminTransactions.js
import React, { useState } from 'react';
import './donordetails.scss';
import Adduser from '../components/Adduser';
import { transactionsData as originalData } from '../components/menudata';
import Transactiondatatable from '../components/Transactiondatatable';

// Function to preprocess data and format dates
const preprocessData = (data) => {
  return data.map((item) => ({
    ...item,
    transaction_date: new Date(item.transaction_date).toLocaleString(),
    donor: `${item.donor.first_name} ${item.donor.last_name}`,
  }));
};

// Custom cell renderer for transaction status with button-like styling
const statusCellRenderer = (params) => {
  const status = params.value.toLowerCase();
  let backgroundColor, textColor;

  switch (status) {
    case 'completed':
      backgroundColor = '#017960'; // Green
      textColor = '#fff'; // White text
      break;
    case 'pending':
      backgroundColor = '#ff9800'; // Orange
      textColor = '#fff'; // White text
      break;
    case 'failed':
      backgroundColor = '#f44336'; // Red
      textColor = '#fff'; // White text
      break;
    default:
      backgroundColor = '#9e9e9e'; // Default color for unknown status
      textColor = '#333'; // Dark gray text
  }

  const style = {
    padding: '6px 12px', // Adjust padding as needed
    borderRadius: '4px',
    color: textColor, // Apply text color
    backgroundColor, 
    border: 'none', // Remove default border
    cursor: 'default', // Remove default cursor
    fontWeight: 'bold', // Make text bold
    fontSize: '14px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
  };

  return (
    <span style={style}>
      {params.value}
    </span>
  );
};

// Define the columns for the Datatable
const columns = [
  {
    field: 'transaction_date',
    headerName: 'Transaction Date',
    width: 150,
    editable: true,
    headerAlign: 'center',
    align: 'center',
    headerCellStyle: {
      backgroundColor: '#f0f0f0',
      fontWeight: 'bold',
    },
  },
  {
    field: 'donor',
    headerName: 'Donor',
    width: 150,
    editable: true,
    headerAlign: 'center',
    align: 'center',
    headerCellStyle: {
      backgroundColor: '#f0f0f0',
      fontWeight: 'bold',
    },
  },
  {
    field: 'campaign',
    headerName: 'Campaign',
    width: 150,
    editable: true,
    headerAlign: 'center',
    align: 'center',
    headerCellStyle: {
      backgroundColor: '#f0f0f0',
      fontWeight: 'bold',
    },
  },
  {
    field: 'amount',
    headerName: 'Amount',
    width: 150,
    editable: true,
    headerAlign: 'center',
    align: 'center',
    headerCellStyle: {
      backgroundColor: '#f0f0f0',
      fontWeight: 'bold',
    },
  },
  {
    field: 'payment_method',
    headerName: 'Payment Method',
    sortable: true,
    width: 150,
    align: 'left',
    headerCellStyle: {
      backgroundColor: '#f0f0f0',
      fontWeight: 'bold',
    },
  },
  {
    field: 'transaction_status',
    headerName: 'Status',
    sortable: true,
    width: 150,
    align: 'left',
    headerCellStyle: {
      backgroundColor: '#f0f0f0',
      fontWeight: 'bold',
    },
    renderCell: statusCellRenderer, // Use the custom renderer
  },
];

const AdminTransactions = () => {
  const [open, setOpen] = useState(false); // State for the Adduser modal
  const transactionsData = preprocessData(originalData);

  

  return (
    <div className="donoruser">
      <div className="info">
        <h1>Transaction Details</h1>
        <button onClick={() => setOpen(true)}>Add New Transaction</button>
      </div>
      <Transactiondatatable slug="admin/userinfo" columns={columns} rows={transactionsData} />
      {open && <Adduser slug="Donor" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default AdminTransactions;