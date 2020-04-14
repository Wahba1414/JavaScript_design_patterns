'use strict';
var Robot = (function () {
  console.log(this);
  // Private: can't be modified by the user (directly).
  var robotsCounter = 0;
  // Privilage
  // The user can change through the public APIs.
  var configs = {
    speed: 10,
    language: 'English',
  };
  function incrrementCounter() {
    robotsCounter++;
  }
  // functions.
  this.createNewRobot = function (name) {
    // do some stuffs.
    incrrementCounter();
  }
  this.changeLanguage = function (value) {
    // do the needed validations first.
    // update the language
    configs.language = value;
  }
  return this;
}).apply({});

// for Node.js
module.exports = Robot;