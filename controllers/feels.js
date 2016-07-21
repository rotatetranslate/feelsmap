var Feel = require('../models/feel');

// get feels
var feelIndex = function(req, res) {
  Feel.find({}, function(err, feels) {
    if (err) {res.send(err)}
    res.json(feels);
  });
};

// create feel
var feelCreate = function(req, res) {
  var feel = new Feel();


  feel.user        = req.body.user;
  feel.latLng      = req.body.latLng;
  feel.feel        = req.body.feel;
  feel.description = req.body.description

  feel.save(function(err, savedFeel) {
    if (err) {res.send(err)}
    console.log('thats a nice feel');
    res.json(savedFeel);
  });
};

module.exports = {
  feelIndex:  feelIndex,
  feelCreate: feelCreate
}
