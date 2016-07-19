var mongoose = require('mongoose');
var Feel     = require('./feel.js');
//var bcrypt   = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
  userName: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  email:    {type: String}
});

var User = mongoose.model('User', userSchema);

module.exports = User;

