var mongoose = require('mongoose');
var Feel     = require('./feel.js');
var bcrypt   = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema({
  userName: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  email:    {type: String}
});

// exclude password
UserSchema.set('toJSON', {
  transform: function(doc, ret) {
    delete ret.password;
    return ret;
  }
});

// hash the password before the user is saved
UserSchema.pre('save', function(next) {
  var user = this;

  // hash the password only if the password has been changed or user is new
  if (!user.isModified('password')) return next();

  // generate the hash
  bcrypt.hash(user.password, null, null, function(err, hash) {
    if (err) return next(err);

    // change the password to the hashed version
    user.password = hash;
    next();
  });
});

// method to compare a given password with the database hash
UserSchema.methods.comparePassword = function(password) {
  var user = this;

  return bcrypt.compareSync(password, user.password);
};

// Access user's fishes
UserSchema.methods.feels = function(callback) {
  Feel.find({user: this._id}, function(err, feels) {
    callback(err, feels);
  });
};

var User = mongoose.model('User', UserSchema);

module.exports = User;

