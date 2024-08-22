import "./addcampaigns.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import UnarchiveTwoToneIcon from '@mui/icons-material/UnarchiveTwoTone';
import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import Adminfooter from "../../../Admin/components/Adminfooter";
import axios from "axios";
import Nav from "../../components/nav/Nav";
const AddCampaigns = ()=>{
     const [name , setName]= useState('');
     const [image , setImage]= useState('');
     const [description, setDescription] = useState('');
     const [amount, setAmount] =useState('');
     const [endDate, setEndDate] = useState("");
     const [loading ,setLoading] =useState(false);
const navigate =useNavigate();
const handleSaveBook =()=>{ 
     const data ={
        name,
        image,
        description,
        amount,
        endDate,
     };
     setLoading(true);
     axios
     .post("http://localhost:5000/campaigns", data)
     .then(()=>{
        setLoading(false);
        navigate('/campaigns');
     })
     .catch((error)=>{
        setLoading(false);
        alert('An error happened.Please Check console');
        console.log(error);
     });
    };
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentDateTime = `${month}/${day}/${year}  ${hours}:${minutes}:${seconds}`
    
    return(
        <div className="addcampaigns">
        <Sidebar />
        <div className="addcontainer">
        <Nav/>
        <div className="top">
            <h1>ADD CAMPAIGN </h1>
            </div>
       <div className="bottom">
        <div className="items">
<form>
    <div className="formInput">
        <label>CampaignName</label>
        <input 
        type="text" 
        placeholder="Compaign Name*"
        value={name}
        onChange={(e)=> setName(e.target.value)}
        />
        
    </div>
    <div className="formInput">
        <label htmlFor="file"  >
        Campaign image:<UnarchiveTwoToneIcon className="icon"/></label>
        <input type="file"
         id ="file" 
         style={{display:""}}
          />
          
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
        <input type="text" 
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount Needed ??"S
        />

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
    <button onClick={handleSaveBook}>
        SUBMIT
    </button>
</form> 
    </div>
    
    <Adminfooter/>
    </div>
       </div>
       
        </div>

    )
}
export default AddCampaigns;