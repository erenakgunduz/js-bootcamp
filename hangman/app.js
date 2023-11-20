import Hangman from './hangman.js';
import { getPuzzle, getCountry } from './requests.js';

getPuzzle(2, (error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(puzzle);
  }
});
// Slow synchronous version for demonstration purposes
// const puzzle = getPuzzleSync(2);
// console.log(puzzle);

getCountry('KP', (error, countryName) => {
  if (error) {
    console.log(`Unable to fetch data: ${error} response`);
  } else {
    console.log(countryName);
  }
});

const game1 = new Hangman('Cat', 2);

(() => game1.game)(); // IIFE to use the getter
window.addEventListener('keypress', (e) => {
  const guess = e.key;
  game1.makeGuess(guess);
});
