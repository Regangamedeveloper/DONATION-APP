import "./addcompaigns.scss"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar";
import UnarchiveTwoToneIcon from '@mui/icons-material/UnarchiveTwoTone';
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Adminfooter from "../../../Admin/components/Adminfooter";
const AddCompaigns = ()=>{
    const [description, setDescription] = useState('');
    const [endDate, setEndDate] = useState("");
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    const currentDateTime = `${month}/${day}/${year}  ${hours}:${minutes}:${seconds}`
    
    return(
        <div className="addcompaigns">
        <Sidebar />
        <div className="addcompaignsContainer">
        <Navbar/>
        <div className="top">
            <h1>ADD COMPAIGN </h1>
            </div>
       <div className="bottom">
        <div className="items">
<form>
    <div className="formInput">
        <label>CompaignName</label>
        <input type="text" placeholder="Compaign Name*"/>
    </div>
    <div className="formInput">
        <label htmlFor="file"  >
        Compaign image:<UnarchiveTwoToneIcon className="icon"/></label>
        <input type="file" id ="file" style={{display:""}} />
    </div>
    <div className="formInput">
  <label htmlFor="description">Description:</label> 
  <textarea 
    id="description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    placeholder="Enter a detailed description"
    rows="8" 
    maxLength="10000" // Limits input to 250 characters
  />
</div>
    <div className="formInput">
        <label>Amount</label>
        <input type="text" placeholder="Amount Needed ??"/>
    </div>
    <div className="formInput">
    <label htmlFor="startDate">Start Date and Time:</label>
    <input type="text" value={currentDateTime} readOnly />  
    </div>
    <div className="formInput">
      <label htmlFor="endDate">End Date:</label>
      <input
        type="date"
        id="endDate"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
    </div>
    <Link to="/campaigns"style={{textDecoration:"none"}}>
    <button>
        SUBMIT
    </button>
    </Link>
</form>
    </div>
    
    <Adminfooter/>
    </div>
       </div>
       
        </div>

    )
}
export default AddCompaigns;