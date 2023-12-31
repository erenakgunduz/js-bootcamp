export default class Hangman {
  constructor(word, guesses) {
    this.word = word.toLowerCase().split('');
    this.guesses = guesses;
    this.guessedLetters = [];
    this.finished = false;
    this.status = 'playing';
    this.puzzleElement = document.querySelector('main .puzzle');
    this.remainElement = document.querySelector('main .remaining');
    this.outcomeElement = document.querySelector('main .outcome');
    this.finishElement = document.querySelector('main .finished');
  }

  get game() {
    const puzzle = this.word.join('').replaceAll(/\S/g, '*').split('');

    // Swap asterisks back out with actual discovered letters
    this.word.forEach((letter, index) => {
      const letterMatch = this.guessedLetters.find((guessedLetter) => letter === guessedLetter);
      if (letterMatch) puzzle[index] = letter;
    });

    // Establish the different scenarios
    if (this.guesses >= 0 && !this.finished) {
      const letterElements = [];
      puzzle.forEach((letter) => {
        letterElements.push(`<span>${letter}</span>`);
        this.puzzleElement.innerHTML = letterElements.join('');
      });
      this.remainElement.textContent =
        this.guesses === 1
          ? 'You have one guess left. Last chance ;)'
          : `You have ${this.guesses} guesses left`;
      this.outcomeElement.textContent = '';
      this.finishElement.textContent = '';
      if (this.guesses === 0 && puzzle.includes('*')) {
        this.status = 'failed';
        const enc = "&mdash; you'll get em next time :)"; // encouragement
        this.outcomeElement.innerHTML = `It was '<strong>${this.word.join('')}</strong>' ${enc}`;
        return true;
      }
      if (!puzzle.includes('*')) {
        this.status = 'finished';
        this.outcomeElement.textContent = 'You got it! Congratulations :)';
        return true;
      }
      return false;
    }
    this.finishElement.textContent = 'You already finished this game :)';
    return true;
  }

  makeGuess(guess) {
    const thisGuess = [];

    // Handle the format for the guess that was passed in
    if (typeof guess === 'object') {
      guess.forEach((letter) => {
        if (letter.length > 1) {
          const splitString = letter.toLowerCase().split('');
          splitString.forEach((stringLetter) => thisGuess.push(stringLetter));
        } else {
          thisGuess.push(letter.toLowerCase());
        }
      });
    } else if (typeof guess === 'string') {
      if (guess.length > 1) {
        const splitGuess = guess.toLowerCase().split('');
        splitGuess.forEach((guessLetter) => thisGuess.push(guessLetter));
      } else {
        thisGuess.push(guess.toLowerCase());
      }
    } else {
      throw TypeError(`Expected array or string, got ${typeof guess}`);
    }

    // Find a letter in this guess that is in the word; if it can't, it's a bad guess
    let badGuess = !thisGuess.find((letter) => this.word.includes(letter));
    // If it's not a bad guess but it contains an already guessed correct letter, it could actually be a bad guess so check again
    if (!badGuess && thisGuess.find((exists) => this.guessedLetters.includes(exists))) {
      const actualGuess = thisGuess.filter((other) => !this.guessedLetters.includes(other));
      // console.debug(actualGuess); // Will always be empty for non-unique guess and inevitably lead badGuess to return true
      badGuess = !actualGuess.find((aLetter) => this.word.includes(aLetter));
    }
    // If there is nothing unique in the guess, the overlap array will match our guess
    const overlap = thisGuess.filter((value) => this.guessedLetters.includes(value));
    const uniqueGuess = JSON.stringify(thisGuess) !== JSON.stringify(overlap);
    // console.debug(thisGuess, overlap);
    // console.debug('Bad guess?', badGuess, 'Unique guess?', uniqueGuess);
    // So, we're saying "decrement only if it's a bad AND a unique guess"
    if (badGuess && uniqueGuess) this.guesses--;
    // Cleaning duplicates before pushing and for final array of all guessed letters
    [...new Set(thisGuess)].forEach((thisLetter) => this.guessedLetters.push(thisLetter));
    this.guessedLetters = [...new Set(this.guessedLetters)];
    // console.debug(this.guessedLetters);
    this.finished = this.game;
    // console.debug(this.status);
  }
}
