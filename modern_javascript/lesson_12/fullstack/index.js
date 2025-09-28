// classes

// we could create a function and add the methods on the function object using the prototype

// in javascript functions are objects - inherit the behavior of object
// whenever you create an object, the prototype object is also created behind the scene

//previously

function PrevHoliday(destination, days) {
  this.destination = destination;
  this.days = days;
}

PrevHoliday.prototype.info = function() {
  console.log(this.destination + ' | ' + this.days + ' days');
}

var nepal = new PrevHoliday('Nepal', 30);
console.log(nepal.info());

// in es6

class Holiday {
  constructor(destination, days) {
    this.destination = destination;
    this.days = days;
  }

  info() {
    console.log(`${this.destination} will take ${this.days} days.`);
  }
}

console.log(Holiday.prototype);

const trip = new Holiday('Kathmandu', 45);

console.log(trip.info());

// extending a class to a child class

class Expedition extends Holiday {
  constructor(destination, days, gear) {
    super(destination, days);
    this.gear = gear;
  }

  info() {
    super.info();
    console.log(`Bring your ${this.gear.join(' and your ')}.`);
  }
}

const tripWithGear = new Expedition('Everest', 20, ['Sunglasses', 'Flags', 'Camera']);

tripWithGear.info();
