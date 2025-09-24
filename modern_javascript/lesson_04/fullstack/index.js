let fname= 'Daniel';
let lname = 'Buttig';
let age = prompt("Guess Daniel's age..");

//  old way
//  let result = fname +  ' ' + lname + ' is ' + age + ' years old';
//  alert(result);

// using template string
let result = `${fname} ${lname} is ${age} years old!`;
alert(result);
