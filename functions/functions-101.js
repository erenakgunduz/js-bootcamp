// Function - input (argument), code, output (return value)

let greetUser = function () {
  console.log("Welcome user!");
};

greetUser();

let square = function (num) {
  let result = num * num;
  return result;
};

let value = square(3);
let otherValue = square(10);

console.log(value);
console.log(otherValue);

// Challenge area

// convertFtoC function

// Call a couple of times (32 -> 0, 68 -> 20)
// Print the converted values

// Using the arrow function form
let ConvertFtoC = (fahrenheit) => {
  let celsius = (fahrenheit - 32) * (5 / 9);
  return celsius;
};

let tempOne = ConvertFtoC(32);
let tempTwo = ConvertFtoC(68);

console.log("------");
console.log(tempOne);
console.log(tempTwo);
