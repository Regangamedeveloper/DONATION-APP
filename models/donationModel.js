const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  charityProgram: {
    type: String,
    required: true,
  },
  donationAmount: {
    type: Number,
    required: true,
  },
  donationFrequency: {
    type: String,
    enum: ['one-time', 'monthly', 'quarterly', 'annually'],
    default: 'one-time',
  },
  dedication: {
    type: String,
  },
  paymentMethod: {
    type: String,
    enum: ['mobile-money', 'visa'],
    required: true,
  },
  paymentDetails: {
    mobileNumber: {
      type: String,
    },
    cardDetails: {
      number: { type: String },
      expiry: { type: String },
      cvv: { type: String },
    },
  },
  transactionId: {
    type: String,
    // integrate a payment gateway and store the transaction ID here
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Donation', donationSchema);