var express = require('express');
var router = express.Router();
var Campaign = require('../models/Campaigns');

router.get('/', async (req, res) => {
  const campaigns = await Campaign.find();
  res.send(campaigns);
});

router.post('/register', async (req, res) => {
  try {
    const campaigns = new Campaign(req.body);
    await campaigns.save();
    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.render('error', { error: err });
  }
});

module.exports = router;
