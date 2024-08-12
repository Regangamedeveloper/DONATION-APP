const express = require('express');
require('dotenv').config();
const {v4:uuidv4} =require("uuid");
const db= require('./server/database/db');
 // Assuming your routes are in a 'routes' folder

const app =express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// Use the router for campaigns routes
// Use your routes
app.get("/",(req,res,next)=>{
  res.status(200).json(
    {
      statusCode:200,
      status:"success",
      clientId:uuidv4(),
      message:"Regangamedeveloper",
    });
  
});


  app.listen(5000,()=>{console.log("app is running")});