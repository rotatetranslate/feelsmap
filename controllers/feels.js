var Feel = require('../models/feel');

// get feels
var feelIndex = function(req, res) {
  Feel.find({}, function(err, feels) {
    if (err) {res.send(err)}
    res.json(fishes);
  });
};

// create feel
var feelCreate = function(req, res) {
  var feel = new Feel();

  feel.lat         = req.body.lat;
  feel.lng         = req.body.lng;
  feel.type        = req.body.type;
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
