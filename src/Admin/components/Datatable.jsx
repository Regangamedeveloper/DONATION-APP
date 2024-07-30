import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar, renderActionsCell } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
import { Edit } from '@mui/icons-material';
import { Tooltip } from '@mui/material';


export default function Datatable(props) { 

  const handleDelete = (id) => {
    //delete the item
    // mutation.mutate(id)
    console.log(id + ' has been deleted');
  };

  const actionColumn = [
    {
      field: 'Actions',
      headerName: 'Actions',
      
      sortable: true,
      width: 100,
      align: 'left',
      headerCellStyle: {
        backgroundColor: '#f0f0f0',
        fontWeight: 'bold', 
      },
      renderCell: (params)=>{
        return <div className="action"> 
         <Tooltip title='view activity & Edit user'>
         <Link to={`/${props.slug}/${params.row.id}`}>
            <Edit style={{ 
            border:'none',
            borderRadius:'5px',
            padding:'5px',
            gap:'10px',
            backgroundColor:'#017960',
              color:'white',
              marginRight: '10px',

             }} />
          </Link>
          </Tooltip>  
          <Tooltip title='Delete User'>
          <DeleteIcon style={{  border:'none',
            borderRadius:'5px',
            padding:'5px',
            gap:'5px',
            backgroundColor:'gray',
              color:'white', }} onClick={() => handleDelete(params.row.id)}/>
          </Tooltip>
           
        </div>
      }
    },

  ];

  return (
    <Box sx={{ height: 618, width: '100%',  
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
        fontSize:'15px',
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
      // Target the footer container and set the background color
      '& .MuiDataGrid-footerContainer': {
        backgroundColor: '#017960',
        color:'white',
        borderRadius:'0px 0px 5px 5px',
        border:'none',
      }  
    }}>
      <DataGrid
        rows={props.rows}
        columns={[...props.columns, ...actionColumn]} // Concatenate columns and actionColumn
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 9,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
           toolbar:{
            showQuickFilter:true,
            quickFilterProps:{debounceMs:500}
           } 
        }}
        pageSizeOptions={[9]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </Box>
  );
}