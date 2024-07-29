import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './transactionsD.scss';

const TransactionsD = () => {
  const [transactions, setTransactions] = useState([
    // Example data
    {
      id: 1,
      programName: 'Education Program',
      amount: 1000000,
      transactionDate: '2024-06-15',
      status: 'Completed',
    },
    {
      id: 2,
      programName: 'Health Program',
      amount: 50000000,
      transactionDate: '2024-06-20',
      status: 'Completed',
    },
  ]);

  useEffect(() => {
    // Fetch transaction history from an API or database
    // setTransactions(fetchedTransactions);
  }, []);

  const handlePrintReceipt = (transaction) => {
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Receipt</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h1 { color: #017960; }
            table { width: 100%; border-collapse: collapse; }
            th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
            th { background-color: #017960; color: #fff; }
          </style>
        </head>
        <body>
          <h1>Donation Receipt</h1>
          <p>Transaction ID: ${transaction.id}</p>
          <p>Program Name: ${transaction.programName}</p>
          <p>Amount: $${transaction.amount.toLocaleString()}</p>
          <p>Transaction Date: ${transaction.transactionDate}</p>
          <p>Status: ${transaction.status}</p>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="transactions-page">
      <Navbar />
      <div className="transactions-content">
        <h1>Transaction History</h1>
        <table className="transactions-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Program Name</th>
              <th>Amount</th>
              <th>Transaction Date</th>
              <th>Status</th>
              <th>Receipt</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.programName}</td>
                <td>{transaction.amount.toLocaleString()}</td>
                <td>{transaction.transactionDate}</td>
                <td>{transaction.status}</td>
                <td>
                  <button
                    onClick={() => handlePrintReceipt(transaction)}
                    className="print-button"
                  >
                    Print Receipt
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsD;
