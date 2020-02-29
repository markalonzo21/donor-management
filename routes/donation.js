var express = require('express');
var router = express.Router();
var Donation = require('../models/Donation');

router.post('/register', async (req, res) => {
  try {
    const donations = new Donation(req.body);
    await donations.save();
    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.render('error', { error: err });
  }
});

module.exports = router;
