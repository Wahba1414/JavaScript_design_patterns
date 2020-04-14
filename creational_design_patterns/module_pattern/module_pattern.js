var Robot = (function () {
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
  var createNewRobot = function (name) {
    // do some stuffs.

    incrrementCounter();
  }

  var changeLanguage = function (value) {
    // do the needed validations first.
    // update the language
    configs.language = value;
  }

  // here expose what needed to be public.
  return {
    createNewRobot,
    changeLanguage
  }

})();

// for Node.js
module.exports = Robot;