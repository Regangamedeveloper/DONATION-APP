import React from 'react';
import { GridColDef } from "@mui/x-data-grid";
import "./adduser.scss";
import CloseIcon from '@mui/icons-material/Close';

const Adduser = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setOpen(false);
  };

  // Function to handle clicks outside the modal content
  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      props.setOpen(false);
    }
  };

  return (
    <div className="add" onClick={handleClickOutside}> 
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          <CloseIcon /> 
        </span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item" key={column.field}>
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Adduser;