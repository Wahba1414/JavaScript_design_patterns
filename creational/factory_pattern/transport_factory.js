// Import all sub classes.
var Ship = require('./ship_transport');
var Train = require('./train_transport');

module.exports = function (transportType) {

  // Create a new instance for it, if you want to run some checks on it.
  var newInstance;

  switch (transportType) {
    case 'Train':
      newInstance = new Train();
      break;

    case 'Ship':
      newInstance = new Ship();
      break;
  }

  // Run checks here. Ex: check all needed functions exist ?!
  return newInstance;
}