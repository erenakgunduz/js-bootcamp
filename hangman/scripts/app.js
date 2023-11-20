import Hangman from './hangman.js';
import { getPuzzle } from './requests.js';

// Promise chaining version
// const startGame = (numWords, numGuesses) => {
//   return getPuzzle(numWords)
//     .then((puzzle) => new Hangman(puzzle, numGuesses))
//     .then((game1) => {
//       (() => game1.game)(); // IIFE to use the getter
//       window.addEventListener('keypress', (e) => {
//         const guess = e.key;
//         game1.makeGuess(guess);
//       });
//     })
//     .catch((err) => console.log(err));
// };

const startGame = async (numWords, numGuesses) => {
  try {
    const puzzle = await getPuzzle(numWords);
    console.debug(puzzle);
    const game1 = new Hangman(puzzle, numGuesses);
    (() => game1.game)(); // IIFE to use the getter
    window.addEventListener('keypress', (e) => {
      const guess = e.key;
      game1.makeGuess(guess);
    });
  } catch (err) {
    console.log(err);
  }
};

startGame(2, 5);
document.querySelector('.reset').addEventListener('click', () => startGame(2, 5));

// Slow synchronous version for demonstration purposes
// const puzzle = getPuzzleSync(2);
// console.log(puzzle);

// getCountry('KP')
//   .then((country) => console.log(country))
//   .catch((err) => console.log(err));

// getCurrentCountry()
//   .then((country) => console.log(country))
//   .catch((err) => console.log(err));

// getLocation()
//   .then((location) => {
//     const countryCode = location.pop();
//     console.log(`Hold tight the ${location.join(', ')} crew`);
//     console.debug(countryCode);
//     return countryCode;
//   })
//   .then((cCode) => getCountry(cCode))
//   .then((ctry) => console.log(ctry))
//   .catch((err) => console.log(err));
