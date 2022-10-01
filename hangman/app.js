import Hangman from './hangman.js';

const game1 = new Hangman('Cat', 2);

game1.getPuzzle();
window.addEventListener('keypress', (e) => {
  const guess = e.key;
  game1.makeGuess(guess);
});
