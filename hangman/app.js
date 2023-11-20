import Hangman from './hangman.js';
import { getPuzzle, getCountry } from './requests.js';

getPuzzle(2)
  .then((puzzle) => console.log(puzzle))
  .catch((err) => console.log(err));
// Slow synchronous version for demonstration purposes
// const puzzle = getPuzzleSync(2);
// console.log(puzzle);

getCountry('KP')
  .then((country) => console.log(country))
  .catch((err) => console.log(err));

const game1 = new Hangman('Cat', 2);

(() => game1.game)(); // IIFE to use the getter
window.addEventListener('keypress', (e) => {
  const guess = e.key;
  game1.makeGuess(guess);
});
