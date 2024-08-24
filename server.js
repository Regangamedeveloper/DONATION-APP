const express = require('express');
require('dotenv').config();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require('body-parser'); 

// Assuming your routes are in a 'routes' folder
const campaignsRoute = require('./routes/campaigns');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

// Database connection
const url = process.env.API_KEY;
mongoose
  .connect(url)
  .then(() => console.log("CONNECTED TO MONGODB!"))
  .catch((err) => console.error("Failed to Connect to MongoDB:", err));
  

// Base route
app.get('/', async (req, res) => {
  console.log(req);
  return res.status(234).send('welcome');
});

// Campaigns routes
app.use("/campaigns", campaignsRoute);

// Start the server
app.listen(5000, () => { 
  console.log("app is running on port 5000"); 
});
