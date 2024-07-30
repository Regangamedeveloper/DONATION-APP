import React, { useState } from 'react'
import './donordetails.scss';
import { donations } from '../components/menudata';
import Adduser from '../components/Adduser';
import Donationdatatable from '../components/Donationdatable';

const columns = [
  // { field: 'id', headerName: 'ID', width: 90, headerAlign: 'center', align: 'center',
  //   headerCellStyle: {
  //     backgroundColor: '#f0f0f0',
  //     fontWeight: 'bold', 
  //   }
  // },

  {
    field: 'donor_name',
    headerName: 'Donor Name',
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
    field: 'campaign_name',
    headerName: 'Campaign Name',
    width: 190,
    editable: true,
    headerAlign: 'center', 
    align: 'center',
    headerCellStyle: {
      backgroundColor: '#f0f0f0',
      fontWeight: 'bold', 
    }
  },
  {
    field: 'donation_amount',
    headerName: 'Amount Donated',
    width: 150,
    editable: true,
    headerAlign: 'center', 
    align: 'center',
    headerCellStyle: {
      backgroundColor: '#f0f0f0',
      fontWeight: 'bold', 
    }
  },
  {
    field: 'donation_date',
    headerName: 'Donation Date',
    width: 180,
    editable: true,
    headerAlign: 'center', 
    align: 'center',
    headerCellStyle: {
      backgroundColor: '#f0f0f0',
      fontWeight: 'bold', 
    }
  },
  {
    field: 'donation_status',
    headerName: 'Donation status',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 150,
    align: 'left',
    headerCellStyle: {
      backgroundColor: '#f0f0f0',
      fontWeight: 'bold', 
    },
    renderCell: (params) => {
      const status = params.row.donation_status;
      let statusStyle = {};
      if (status === 'Pending') {
        statusStyle = {
          border: '2px solid red', 
          borderRadius: '5px',
          color: 'red',
          padding: '5px 10px', 
        };
      } else {
        statusStyle = {
          border: '2px solid green',
          borderRadius: '5px',
          color: 'green',
          padding: '5px 10px', 
        };
      }
      return (
        <span style={statusStyle}>{status}</span>
      );
    },
  },
];

const Donationdetails = () => {
  const [open, setOpen] = useState(false); 

  return (
    <div className="donoruser">
        <div className="info">
            <h1>Donation Details</h1>
            <button onClick={() => setOpen(true)}>Add New Donation</button>
        </div>
        <Donationdatatable slug="admin/userinfo" columns={columns} rows={donations}/>
        {/* Render Adduser modal if open is true */}
        {open && <Adduser slug="Donation" columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Donationdetails;