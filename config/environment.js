var _ = require('lodash');

var localEnvVars = {
  TITLE:      'feelsmap',
  SAFE_TITLE: 'feelsmap',
  superSecret: 'secret'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
