var mongoose = require('./database');
var User     = require('../models/user');
var Feel     = require('../models/feel');

var users = [
  { // 0
    userName: "yung feel",
    email:   "yungfeel@gmail.com",
    password: "abc123"
  },
  { // 1
    userName: "seeded user",
    email:   "seededuser@gmail.com",
    password: "abc123"
  },
  { // 2
    userName: "xEmoBoix",
    email:   "xemoboix@gmail.com",
    password: "abc123"
  }
];

Feel.remove({}, function(err) {
  if (err) console.log(err);

  User.remove({}, function(err) {
    if (err) console.log(err);

    // create users
    User.create(users, function(err, users) {
      console.log(users);

      // create feels
      var feels = [
        { // 0
          lat: '34.0312450',
          lng: '-118.2665320',
          feel: 'stressed',
          description: 'working on my final project feeling v stressed',
          user: users[0]._id
        },
          { // 1
          lat: '34.0234558',
          lng: '-118.2655020',
          feel: 'annoyed',
          description: 'im not even a real person',
          user: users[1]._id
        },
          { // 2
          lat: '34.0227089',
          lng: '-118.2870026',
          feel: 'relaxed',
          user: users[2]._id
        }
      ];

      Feel.create(feels, function(err, feels) {

        if (err) {
          console.log(err);
        } else{
          console.log(`Database seeded with ${users.length} users and ${feels.length} feels`);

          // disconnect db
          mongoose.connection.close();
        }
        process.exit();
      });
    });
  });
});
