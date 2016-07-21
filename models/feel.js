var mongoose = require('mongoose');
var User     = require('./user.js');

var feelSchema = new mongoose.Schema({
  latLng: {type: [Number], index: '2d'},
  feel: {type: String, required: true,
         enum: [
          'stressed',
          'relaxed',
          'happy',
          'sad',
          'annoyed',
          'angry',
          'sublime',
          'in love'
         ]
       },
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  description: String
});

var Feel = mongoose.model('Feel', feelSchema);

module.exports = Feel;

// stressed 😬
// relaxed  😎
// happy    🙂
// sad      😔
// annoyed  😑
// angry    😡
// sublime  😇
// in-love  😘
