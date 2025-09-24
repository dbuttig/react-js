let [firstMountain] = ['Everest', 'Fish Tail', 'Annapurna']; // gets the first element
let [, secondMountain] = ['Everest', 'Fish Tail', 'Annapurna']; // skips over the first and gets the second element
let [, , thirdMountain] = ['Everest', 'Fish Tail', 'Annapurna']; // skips over the first two elements and gets the third element

console.log(firstMountain);
console.log(secondMountain);
console.log(thirdMountain);
