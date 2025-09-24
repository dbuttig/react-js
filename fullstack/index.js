let thingsToDo = {
  morning: "Exercise",
  afternoon: 'Work',
  evening: 'Code',
  night: ['Sleep', 'Dream']
}

let {morning, afternoon} = thingsToDo; // Can destruct the object down into its components as their own variables

morning = 'Run'; // new variable acts as variables are expected to

console.log(morning, ' - ', afternoon);

// without destructuring
//let uniStudent = student => {
  //console.log(`${student.name} from ${student.university}`);
//}

// with destructuring
//let uniStudent = student => {
  //let {name, university} = student;
  //console.log(`${name} from ${university}`);
//}

// destructuring while taking an argument
let uniStudent = ({ name, university }) => {
  console.log(`${name} from ${university}`);
}

uniStudent({
  name: 'Daniel',
  university: 'Truman State'
});
