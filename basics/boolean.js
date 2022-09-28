// === - equality operator
// !== - not equal operator
// < - less than operator
// > - greater than operator
// <= - less than or equal to operator
// >= - greater than or equal to operator

const temp = 105;
const isFreezing = temp <= 32;
const dashes = '------';

if (isFreezing) {
  console.log("It's freezing outside!");
  console.log(dashes);
}

if (temp >= 100) {
  console.log("It's way too hot outside!");
  console.log(dashes);
}

// Challenge area

const age = 19;

if (age <= 8) {
  console.log('You will get a child discount.');
} else if (age >= 65) {
  console.log('You will get a senior discount.');
} else {
  console.log("You won't get a discount.");
}
