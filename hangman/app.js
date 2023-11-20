import Hangman from './hangman.js';
import { getPuzzle, getCountry } from './requests.js';

getPuzzle((error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(puzzle);
  }
});
// Slow synchronous version for demonstration purposes
// const puzzle = getPuzzleSync();
// console.log(puzzle);

getCountry('BB');

const game1 = new Hangman('Cat', 2);

(() => game1.game)(); // IIFE to use the getter
window.addEventListener('keypress', (e) => {
  const guess = e.key;
  game1.makeGuess(guess);
});
