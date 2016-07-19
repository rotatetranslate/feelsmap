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




// 1. MODELS
// 2. CONFIG/ROUTES point to API
// 3. config/controllers
// render -> json
