const express = require('express');
require('dotenv').config();
const mongoose =require ("mongoose");
const cors = require("cors");
 // Assuming your routes are in a 'routes' folder
const campaignsRoute =require('./routes/campaigns')
const donationRoute = require('./routes/donationsRoute');


const app =express();
app.use(express.json());
app.use(cors());
const url = process.env.API_KEY

app.get('/', async (req, res) => {
  console.log(req);
  return res.status(234).send('welcome');
 
});
mongoose
  .connect(url )
  .then(() => console.log("CONNECTED TO MONGODB!"))
  .catch((err) => console.error("Failed to Connect to MongoDB:", err));
app.use(express.urlencoded({extended:true}));
app.use("/campaigns",campaignsRoute);
app.use('/api/donations', donationRoute);
// Use the router for campaigns routes
// Use your routes

  app.listen(5000,()=>{console.log("app is running")});