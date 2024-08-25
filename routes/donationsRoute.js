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

// PUT route to update a specific donation by ID
router.put('/:donationId', async (req, res) => {
  try {
    const donationId = req.params.donationId;
    const updatedData = req.body;

    const updatedDonation = await Donation.findByIdAndUpdate(donationId, updatedData, { new: true });

    if (updatedDonation) {
      res.setHeader('Content-Type', 'application/json');
      res.json({ message: 'Donation updated successfully.', donation: updatedDonation });
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.status(404).json({ error: 'Donation not found.' });
    }
  } catch (error) {
    console.error('Error updating donation:', error);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json({ error: 'Failed to update donation.' });
  }
});


// DELETE route to delete a specific donation by ID
router.delete('/:donationId', async (req, res) => {
  try {
    const donationId = req.params.donationId;

    // Validate the ID
    if (!donationId) {
      return res.status(400).json({ error: 'Donation ID is required.' });
    }

    // Attempt to delete the donation
    const deletedDonation = await Donation.findByIdAndDelete(donationId);

    if (deletedDonation) {
      res.status(200).json({ message: 'Donation deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Donation not found.' });
    }
  } catch (error) {
    console.error('Error deleting donation:', error);
    res.status(500).json({ error: 'Failed to delete donation.' });
  }
});

module.exports = router;
