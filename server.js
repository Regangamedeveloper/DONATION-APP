const express = require('express');
require('dotenv').config();
const db= require('./server/database/db');
 // Assuming your routes are in a 'routes' folder
const campaignsRoute =require('./routes/campaigns')
const app =express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/campaigns",campaignsRoute)
// Use the router for campaigns routes
// Use your routes

  app.listen(5000,()=>{console.log("app is running")});