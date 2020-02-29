var mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  date_registered: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema, 'users');
