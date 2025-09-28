// spread operator ...
// used to combine two arrays or twor objects into one

var mountains = ['Everest', 'Fish Tail', 'Annapurna'];
var mountainsFromJapan = ['Fuji'];

var allMountains = [...mountains, ...mountainsFromJapan];

console.log(allMountains);

var day = {
  breakfast: 'toast with milk',
  lunch: 'rice with chicken curry',
}

var night = {
  dinner: 'noodle soup'
}


var picnic = { ...day, ...night };


console.log(picnic);

// rest operator ...
// used to return the remainder of the array

var rivers = ['Mississippi', 'Missouri', 'Colorado'];
var [first, ...theRest] = rivers;

console.log(first);
console.log(theRest);

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  city: 'New York',
  occupation: 'Engineer'
};

// Destructuring with the rest operator
const { firstName, lastName, ...otherDetails } = user;

console.log(firstName);      // Output: John
console.log(lastName);       // Output: Doe
console.log(otherDetails);   // Output: { age: 30, city: 'New York', occupation: 'Engineer' }
