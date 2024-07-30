import React, { useState } from 'react'
import './donordetails.scss';
import Datatable from '../components/Datatable';
import { campaigns } from '../components/menudata';
import Adduser from '../components/Adduser';

const columns = [
  // { field: 'id', headerName: 'ID', width: 90, headerAlign: 'center', align: 'center',
  //   headerCellStyle: {
  //     backgroundColor: '#f0f0f0',
  //     fontWeight: 'bold', 
  //   }
  // },

  {
    field: 'campaign_name',
    headerName: 'Campaign Name',
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
    field: 'description',
    headerName: 'Description',
    width: 150,
    editable: true,
    headerAlign: 'center', 
    align: 'center',
    headerCellStyle: {
      backgroundColor: '#f0f0f0',
      fontWeight: 'bold', 
    }
  },
  // {
  //   field: 'start_date',
  //   headerName: 'Start Date',
  //   width: 120,
  //   editable: true,
  //   headerAlign: 'center', 
  //   align: 'center',
  //   headerCellStyle: {
  //     backgroundColor: '#f0f0f0',
  //     fontWeight: 'bold', 
  //   }
  // },
  // {
  //   field: 'end_date',
  //   headerName: 'End Date',
  //   width: 180,
  //   editable: true,
  //   headerAlign: 'center', 
  //   align: 'center',
  //   headerCellStyle: {
  //     backgroundColor: '#f0f0f0',
  //     fontWeight: 'bold', 
  //   }
  // },
  { 
    field: 'duration', 
    headerName: 'Campaign Duration', 
    width: 150, 
    align: 'left', 
    headerCellStyle: {
      backgroundColor: '#f0f0f0',
      fontWeight: 'bold', 
    },
    renderCell: (params) => {
      const startDate = new Date(params.row.start_date);
      const endDate = new Date(params.row.end_date);
      
      // Calculate the difference in days
      const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

      return `${diffDays} days`;
    },
  },
  {
    field: 'campaign_status',
    headerName: 'Campaign status',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 150,
    align: 'left',
    headerCellStyle: {
      backgroundColor: '#f0f0f0',
      fontWeight: 'bold', 
    },
    renderCell: (params) => {
      const status = params.row.campaign_status;
      let statusStyle = {};

      if (status === 'Completed') {
        statusStyle = { color: 'red' }; 
      } else if (status === 'Closed') {
        statusStyle = { color: 'lightgray' };
      } else if (status === 'Active') {
        statusStyle = {
          border: '2px solid green',
          borderRadius: '5px',
          color: 'green',
          padding: '5px 10px', 
        };
      } else{
        statusStyle = {
          border: '2px solid red',
          borderRadius: '5px',
          color: 'red',
          padding: '5px 10px', 
        };
      }
      return (
        <span style={statusStyle}>{status}</span>
      );
    },
  },
  {
    field: 'goal_amount',
    headerName: 'Goal Amount',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 120,
    align: 'left',
    headerCellStyle: {
      backgroundColor: '#f0f0f0',
      fontWeight: 'bold', 
    },
   
  },
   {
    field: 'amount_raised',
    headerName: 'Raised Amount',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 120,
    align: 'left',
    headerCellStyle: {
      backgroundColor: '#f0f0f0',
      fontWeight: 'bold', 
    },
   
  },
];

const Campaigndetails = () => {
  const [open, setOpen] = useState(false); 

  return (
    <div className="donoruser">
        <div className="info">
            <h1>Campaign Details</h1>
            <button onClick={() => setOpen(true)}>Add New Campaign</button>
        </div>
        <Datatable slug="admin/campaigninfo" columns={columns} rows={campaigns}/>
        {/* Render Adduser modal if open is true */}
        {open && <Adduser slug="campaign" columns={columns} setOpen={setOpen} />}
    </div>
  )
}

export default Campaigndetails; 