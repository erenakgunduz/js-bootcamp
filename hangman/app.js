import Hangman from './hangman.js';
import { getPuzzle, getCountry, getCurrentCountry, getLocation } from './requests.js';

getPuzzle(2)
  .then((puzzle) => console.log(puzzle))
  .catch((err) => console.log(err));
// Slow synchronous version for demonstration purposes
// const puzzle = getPuzzleSync(2);
// console.log(puzzle);

getCountry('KP')
  .then((country) => console.log(country))
  .catch((err) => console.log(err));

getCurrentCountry()
  .then((country) => console.log(country))
  .catch((err) => console.log(err));

getLocation()
  .then((location) => {
    const countryCode = location.pop();
    console.log(`Hold tight the ${location.join(', ')} crew`);
    console.debug(countryCode);
    return countryCode;
  })
  .then((cCode) => getCountry(cCode))
  .then((ctry) => console.log(ctry))
  .catch((err) => console.log(err));

const game1 = new Hangman('Cat', 2);

(() => game1.game)(); // IIFE to use the getter
window.addEventListener('keypress', (e) => {
  const guess = e.key;
  game1.makeGuess(guess);
});
