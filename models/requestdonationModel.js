const mongoose = require('mongoose');
const requestdonationSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
  },
  charity:{
    type: String,
    required: true,
  },
}, );
const RequestDonation = mongoose.model('requestdonation', requestdonationSchema);

module.exports = RequestDonation;