var _ = require('lodash');

var localEnvVars = {
  TITLE:      'feelsmap',
  SAFE_TITLE: 'feelsmap'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
