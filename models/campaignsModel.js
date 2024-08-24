const mongoose = require('mongoose');

const campaignsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: String,  
    required: true,
  },
  amountCollected:{
    type: String,
    required:false,
  },
  endDate: {
    type: Date,
    required: true,
  },
  registeredDate: {
    type: Date, 
    default: Date.now 
  },
  status: {
    type: String,
    enum: ['Active', 'Completed', 'Pending'], 
    default: 'Active' 
  },
}, {
  timestamps: true
});

const Campaigns = mongoose.model('campaigns', campaignsSchema);

module.exports = Campaigns;