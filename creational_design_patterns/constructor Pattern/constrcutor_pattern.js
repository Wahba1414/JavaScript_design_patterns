// ES5
var Robot = function (name) {
  this.name = name;
}

Robot.prototype.prepareCoffee = function () {
  console.log('Inside prepareCoffee function');
}

var robot1 = new Robot('Jone');
var robot2 = new Robot('Doe');

robot1.prepareCoffee();
robot2.prepareCoffee();

//ES6
class Task {
  constructor(name) {
    this.name = name;
    this.isCompleted = false;
  }

  complete() {
    this.isCompleted = true;
    console.log(`isCompleted: ${this.isCompleted}`);
  }
}


var task1 = new Task('Gym');
var task2 = new Task('leetcode challenge');

task1.complete();
task2.complete();
