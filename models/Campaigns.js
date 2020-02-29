var mongoose = require('mongoose');

const CampaignSchema = mongoose.Schema({
  campaign_title: {
    type: String,
    required: true
  },
  campaign_description: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Campaign', CampaignSchema, 'campaign');
