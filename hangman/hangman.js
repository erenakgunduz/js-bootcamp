const Hangman = function (word, guesses) {
  this.word = word.toLowerCase().split('');
  this.guesses = guesses;
  this.guessedLetters = [];
  this.finished = 0;
};

Hangman.prototype.getPuzzle = function () {
  let puzzle = this.word.join('').replaceAll(/\S/g, '*').split('');

  // Swap asterisks back out with actual discovered letters
  this.word.forEach((letter, index) => {
    const letterMatch = this.guessedLetters.find((guessedLetter) => letter === guessedLetter);
    if (letterMatch) {
      puzzle[index] = letter;
    }
  });

  puzzle = puzzle.join('');
  if (this.guesses >= 0) {
    if (this.guesses === 0 && puzzle.includes('*')) {
      console.log(puzzle);
      this.finished = 1;
      return `You lose! The word was '${this.word.join('')}'`;
    }
    if (!puzzle.includes('*')) {
      console.log(puzzle);
      this.finished = 1;
      return 'You win! Congratulations :)';
    }
    return puzzle;
  }
  this.finished = 1;
  return 'You already finished this game :)';
};

Hangman.prototype.makeGuess = function (guess) {
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
  if (badGuess && uniqueGuess) {
    this.guesses -= 1;
  }
  // Cleaning duplicates before pushing and for final array of all guessed letters
  [...new Set(thisGuess)].forEach((thisLetter) => this.guessedLetters.push(thisLetter));
  this.guessedLetters = [...new Set(this.guessedLetters)];
  // console.debug(this.guessedLetters);
  console.log(this.getPuzzle());
  if (!this.finished) {
    if (this.guesses === 1) {
      console.log('You have one guess left. Last chance ;)');
    } else {
      console.log(`You have ${this.guesses} guesses left`);
    }
  }
};

const game1 = new Hangman('Cat', 2);
game1.makeGuess('c');
game1.makeGuess('t');
game1.makeGuess(['c', 'tz']);

const game2 = new Hangman('New Jersey', 4);
game2.makeGuess('w');
