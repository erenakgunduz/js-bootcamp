// Undefined for variable
let theName;

// theName = 'Eren';

if (theName === undefined) {
  console.log('Please provide a name');
} else {
  console.log(theName);
}

// Undefined for function arguments
const square = (num) => console.log(num);

// Undefined as function return default value
const result = square();
console.log(result);

let age = 27;

// age = undefined; -- use null to explicitly assign lack of value
age = null;

console.log(age);
