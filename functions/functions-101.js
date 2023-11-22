// Function - input (argument), code, output (return value)

const greetUser = () => {
  console.log('Welcome user!');
};

greetUser();

const square = (num) => {
  const result = num * num;
  return result;
};

const value = square(3);
const otherValue = square(10);

console.log(value);
console.log(otherValue);

// Challenge area

// convertFtoC function

// Call a couple of times (32 -> 0, 68 -> 20)
// Print the converted values

// Using the arrow function form
const ConvertFtoC = (fahrenheit) => {
  const celsius = (fahrenheit - 32) * (5 / 9);
  return celsius;
};

const tempOne = ConvertFtoC(32);
const tempTwo = ConvertFtoC(68);

console.log('------');
console.log(tempOne);
console.log(tempTwo);
