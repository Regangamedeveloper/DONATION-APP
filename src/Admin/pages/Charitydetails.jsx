import React, { useState } from 'react'
import './donordetails.scss';
import Datatable from '../components/Datatable';
import { userRows } from '../components/menudata';
import Adduser from '../components/Adduser';

const columns = [
  // { field: 'id', headerName: 'ID', width: 90, headerAlign: 'center', align: 'center',
  //   headerCellStyle: {
  //     backgroundColor: '#f0f0f0',
  //     fontWeight: 'bold', 
  //   }
  // },

  {
    field: 'Profile picture',
    headerName: 'Profile Picture',
    width: 150,
    editable: true,
    headerAlign: 'center', 
    align: 'center',
    headerCellStyle: {
      backgroundColor: '#f0f0f0',
      fontWeight: 'bold', 
    },
    renderCell: (params)=>{
      return <img src={params.row.img || 'https://avatar.iran.liara.run/public/9'} alt='profile' style={{
        width:'45px',
        height:'45px',
        objectFit:'cover',
      }}/>
    }
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 120,
    editable: true,
    headerAlign: 'center', 
    align: 'center',
    headerCellStyle: {
      backgroundColor: '#f0f0f0',
      fontWeight: 'bold', 
    }
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 120,
    editable: true,
    headerAlign: 'center', 
    align: 'center',
    headerCellStyle: {
      backgroundColor: '#f0f0f0',
      fontWeight: 'bold', 
    }
  },
  {
    field: 'email',
    headerName: 'Email',
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
    field: 'phone',
    headerName: 'phone Number',
    description: 'This column has a value getter and is not sortable.',
    sortable: true,
    width: 150,
    align: 'left',
    headerCellStyle: {
      backgroundColor: '#f0f0f0',
      fontWeight: 'bold', 
    }
  },
  {
    field: 'Nationality',
    headerName: 'Nationality',
    description: 'This column has a value getter and is not sortable.',
    sortable:true,
    width: 150,
    align: 'left',
    headerCellStyle: {
      backgroundColor: '#f0f0f0',
      fontWeight: 'bold', 
    }
  },
];

const Charitydetails = () => {
  const [open, setOpen] = useState(false); // State for the Adduser modal

  return (
    <div className="donoruser">
        <div className="info">
            <h1>Charity Details</h1>
            <button onClick={() => setOpen(true)}>Add New charity User</button>
        </div>
        <Datatable slug="admin/charityinfo" columns={columns} rows={userRows}/>
        {/* Render Adduser modal if open is true */}
        {open && <Adduser slug="Charity user" columns={columns} setOpen={setOpen} />}
    </div>
  )
}


export default Charitydetails;