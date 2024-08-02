import React, { useState, useEffect } from 'react';
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
} from '@mui/material';
import './admintransactions.scss';

function AdminTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch data from your backend API
    fetch('/api/transactions')
      .then(res => res.json())
      .then(data => setTransactions(data));
  }, []);

  // Helper function to format currencies (if needed)
  const formatCurrency = (amount, currency) => {
    // Logic for formatting based on the currency
  };

  // Filter transactions based on search term
  const filteredTransactions = transactions.filter(transaction => {
    const donorName = `${transaction.donor.first_name} ${transaction.donor.last_name}`;
    return (
      transaction.transaction_date.toString().includes(searchTerm) ||
      transaction.amount.toString().includes(searchTerm) ||
      donorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.payment_method.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.transaction_status.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <Grid container spacing={2} className="admin-transactions">
      <Grid item xs={12}>
        <h2>Transaction Management</h2>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Search Transactions"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Donor</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Payment Method</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Notes</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTransactions.map(transaction => (
                <TableRow key={transaction.transaction_id}>
                  <TableCell>{transaction.transaction_date}</TableCell>
                  <TableCell>
                    {transaction.donor.first_name} {transaction.donor.last_name}
                  </TableCell>
                  <TableCell>
                    {formatCurrency(transaction.amount, transaction.currency)}
                  </TableCell>
                  <TableCell>{transaction.payment_method}</TableCell>
                  <TableCell>{transaction.transaction_status}</TableCell>
                  <TableCell>{transaction.notes}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default AdminTransactions;