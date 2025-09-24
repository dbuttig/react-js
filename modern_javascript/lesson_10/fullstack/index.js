// VERSION 1 - New way

var name = 'Everest';
var height = 8848;
var output = function () {
  console.log(`Mt ${this.name} is ${this.height} meters tall`);
}

var adventureClimbing1 = { name, height, output }; // builds an object from properties and methods
console.log(adventureClimbing1); // returns the object we created

adventureClimbing1.output(); // calls the function we added on the reconstructed object

// VERSION 2 - Old way

var adventureClimbing2 = {
  name: 'Everest',
  height: 8848,
  output() {
    console.log(`Mt ${this.name} is ${this.height} meters tall`);
  }
}; // builds an object from properties and methods

console.log(adventureClimbing2); // returns the object we created

adventureClimbing2.output(); // calls the function we added on the reconstructed object
