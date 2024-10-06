const express = require('express');
const router = express.Router();
const RequestDonation = require('../models/requestdonationModel'); // Assuming your model is named correctly

router.post('/', async (req, res) => {
  try {
    //  You don't need to set the ID, let MongoDB handle it automatically
    const newRequestDonation = new RequestDonation({
      name: req.body.name, // Assuming 'donor' is a field in your model
      charity: req.body.charity// Assuming 'campaign' is a field in your model
    });

    console.log('Creating requestdonation:', newRequestDonation);

    const savedRequestDonation = await newRequestDonation.save();
    res.status(201).json(savedRequestDonation); // Return the saved object, not campaign
  } catch (err) {
    console.error('Error creating requestdonation:', err);
    res.status(500).json({ error: 'Failed to create requestdonation' }); 
  }
});
// GET route to fetch all requestdonations
router.get('/', async (req, res) => {
    try {
      const requestdonations = await RequestDonation.find();
      res.setHeader('Content-Type', 'application/json'); 
      res.json(requestdonations);
    } catch (error) {
      console.error('Error fetching requestdonations:', error);
      res.setHeader('Content-Type', 'application/json');
      res.status(500).json({ error: 'Failed to retrieve requestdonations.' });
    }
  });
  

module.exports = router;