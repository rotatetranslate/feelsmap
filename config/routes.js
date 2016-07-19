var express = require('express'),
    router  = new express.Router();

// Require controllers.
var usersController = require('../controllers/users');
var feelsController = require('../controllers/feels');

// root path:


// users resource paths:
router.get('/users/:id', usersController.show);

// feels resources paths:
router.get('/feels',  feelsController.feelIndex);
router.post('/feels', feelsController.feelCreate);


module.exports = router;
