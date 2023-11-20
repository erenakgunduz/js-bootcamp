import Hangman from './hangman.js';
import { getPuzzle, getCountry } from './requests.js';

getPuzzle(2).then(
  (puzzle) => console.log(puzzle),
  (err) => console.log(`Error: ${err}`)
);
// Slow synchronous version for demonstration purposes
// const puzzle = getPuzzleSync(2);
// console.log(puzzle);

getCountry('KP').then(
  (countryName) => console.log(countryName),
  (err) => console.log(`Unable to fetch data: ${err} response`)
);

const game1 = new Hangman('Cat', 2);

(() => game1.game)(); // IIFE to use the getter
window.addEventListener('keypress', (e) => {
  const guess = e.key;
  game1.makeGuess(guess);
});
