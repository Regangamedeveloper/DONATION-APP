import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Tooltip } from '@mui/material';
import UpdateDonation from './UpdateDonation';


export default function Transactiondatatable(props) {
  const [open, setOpen] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState(null);

  const handleDelete = (id) => {
    console.log(id + ' has been deleted');
  };

  const handleEdit = (donation) => {
    setSelectedDonation(donation);
    setOpen(true);
  };

  const handleUpdate = (updatedDonation) => {
    console.log('Updated Donation:', updatedDonation);
    // Add logic to update the donation in your data source
  };

  const actionColumn = [
    {
      field: 'Actions',
      headerName: 'Actions',
      sortable: true,
      width: 120,
      align: 'left',
      headerCellStyle: {
        backgroundColor: '#f0f0f0',
        fontWeight: 'bold',
      },
      renderCell: (params) => {
        return (
          <div className="action">
            <Tooltip title="Edit Donation">
              <EditIcon
                style={{
                  border: 'none',
                  borderRadius: '5px',
                  padding: '5px',
                  gap: '10px',
                  backgroundColor: '#017960',
                  color: 'white',
                  marginRight: '10px',
                }}
                onClick={() => handleEdit(params.row)}
              />
            </Tooltip>
            <Tooltip title="Delete Donation">
              <DeleteIcon
                style={{
                  border: 'none',
                  borderRadius: '5px',
                  padding: '5px',
                  gap: '5px',
                  backgroundColor: 'gray',
                  color: 'white',
                }}
                onClick={() => handleDelete(params.row.id)}
              />
            </Tooltip>
          </div>
        );
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 618,
        width: '100%',
        '& .MuiDataGrid-root': {
          border: '1px solid  rgba(112, 106, 106, 0.1)',
          borderRadius: '5px',
        },
        '& .MuiDataGrid-cell': {
          borderColor: 'rgba(112, 106, 106, 0.1)',
        },
        '& .MuiDataGrid-row:hover': {
          backgroundColor: '#f5f5f5',
        },
        '& .MuiDataGrid-columnHeaderTitle': {
          fontWeight: 'bold',
          fontSize: '15px',
        },
        '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
          color: '#555',
          '&:hover': {
            backgroundColor: 'rgba(112, 106, 106, 0.1)',
          },
        },
        '& .MuiDataGrid-toolbarContainer .MuiButton-startIcon svg': {
          color: '#017960',
        },
        '& .MuiDataGrid-footerContainer': {
          backgroundColor: '#017960',
          color: 'white',
          borderRadius: '0px 0px 5px 5px',
          border: 'none',
        },
      }}
    >
      <DataGrid
        rows={props.rows}
        columns={[...props.columns, ...actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 9,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[9]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
      {open && (
        <UpdateDonation
          open={open}
          handleClose={() => setOpen(false)}
          donationData={selectedDonation}
          handleUpdate={handleUpdate}
        />
      )}
    </Box>
  );
}
