var express = require('express');
var router = express.Router();
var Users = require('../models/Users');
var Campaigns = require('../models/Campaigns');
var Donation = require('../models/Donation');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const users = await Users.find();
  const campaigns = await Campaigns.find();
  const donations = await Donation.find();
  const totalPerCampaign = await Campaigns.aggregate([
    {
      $lookup: {
        from: 'donations',
        localField: 'campaign_title',
        foreignField: 'campaign',
        as: 'joined'
      }
    },
    {
      $project: {
        title: '$campaign_title',
        desc: '$campaign_description',
        total: {
          $reduce: {
            input: '$joined',
            initialValue: 0,
            in: { $add: ['$$value', '$$this.amount'] }
          }
        }
      }
    }
  ]).exec();
  res.render('index', {
    title: 'Donation Management',
    users: users,
    campaigns: campaigns,
    donations: donations,
    perCampaign: totalPerCampaign
  });
});

module.exports = router;
