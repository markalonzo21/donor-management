var mongoose = require('mongoose');

const DonationSchema = mongoose.Schema({
  donor: {
    type: String,
    required: true
  },
  campaign: {
    type: String
  },
  amount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Donation', DonationSchema, 'donations');
