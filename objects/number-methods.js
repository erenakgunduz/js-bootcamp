const num = 103.947;

console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

const minimum = 10;
const maximum = 20;
const randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(randomNumber);

// Challenge area

const makeGuess = (guess) => {
  const min = 1;
  const max = 5;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  return guess === randomNum;
};

console.log(makeGuess(1));
