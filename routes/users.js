var express = require('express');
var router = express.Router();
var Users = require('../models/Users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', async (req, res) => {
  try {
    const users = new Users(req.body);
    await users.save();
    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.render('error');
  }
});

module.exports = router;
