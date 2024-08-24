const express = require('express');
const router = express.Router();
const Donation = require('../models/donationModel');

// POST route to handle donation creation
router.post('/', async (req, res) => {
  try {
    const donationData = req.body;

    // (Optional) Validate donation data (using a validation library)

    // Integrate payment gateway here (Stripe, PayPal, etc.)
    // ...  processPayment(donationData.paymentDetails) ...
    // const transactionId = paymentGatewayResponse.transactionId;

    const newDonation = new Donation({
      ...donationData,
      // transactionId: transactionId,  // If you integrated a payment gateway
    });

    const savedDonation = await newDonation.save();
    res.setHeader('Content-Type', 'application/json'); // Set correct content type
    res.status(201).json({ 
      message: 'Donation successful!',
      donation: savedDonation 
    });

  } catch (error) {
    console.error('Error creating donation:', error);

    res.setHeader('Content-Type', 'application/json'); // Set content type
    res.status(500).json({ error: 'Donation failed. Please try again later.' });
  }
});

// GET route to fetch all donations
router.get('/', async (req, res) => {
  try {
    const donations = await Donation.find();
    res.setHeader('Content-Type', 'application/json'); 
    res.json(donations);
  } catch (error) {
    console.error('Error fetching donations:', error);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json({ error: 'Failed to retrieve donations.' });
  }
});

// GET route to fetch donations by program
router.get('/program/:programName', async (req, res) => {
  try {
    const programName = req.params.programName;
    const donations = await Donation.find({ charityProgram: programName });
    res.setHeader('Content-Type', 'application/json');
    res.json(donations);
  } catch (error) {
    console.error('Error fetching donations by program:', error);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json({ error: 'Failed to retrieve donations.' });
  }
});

// GET route to fetch donations by payment method
router.get('/payment/:paymentMethod', async (req, res) => {
  try {
    const paymentMethod = req.params.paymentMethod;
    const donations = await Donation.find({ paymentMethod });
    res.setHeader('Content-Type', 'application/json');
    res.json(donations);
  } catch (error) {
    console.error('Error fetching donations by payment method:', error);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json({ error: 'Failed to retrieve donations.' });
  }
});

// GET route to fetch a specific donation by ID
router.get('/:donationId', async (req, res) => {
  try {
    const donationId = req.params.donationId;
    const donation = await Donation.findById(donationId);
    if (donation) {
      res.setHeader('Content-Type', 'application/json');
      res.json(donation);
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.status(404).json({ error: 'Donation not found.' });
    }
  } catch (error) {
    console.error('Error fetching donation:', error);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json({ error: 'Failed to retrieve donation.' });
  }
});

// DELETE route to delete a specific donation by ID
router.delete('/:donationId', async (req, res) => {
  try {
    const donationId = req.params.donationId;
    const deletedDonation = await Donation.findByIdAndDelete(donationId);
    if (deletedDonation) {
      res.setHeader('Content-Type', 'application/json');
      res.json({ message: 'Donation deleted successfully.' });
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.status(404).json({ error: 'Donation not found.' });
    }
  } catch (error) {
    console.error('Error deleting donation:', error);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json({ error: 'Failed to delete donation.' });
  }
});

module.exports = router;