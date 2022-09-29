const Hangman = function (word, guesses, guessedLetters = [], finished = 0) {
  this.word = word.toLowerCase().split('');
  this.guesses = guesses;
  this.guessedLetters = guessedLetters;
  this.finished = finished;
};

Hangman.prototype.getPuzzle = function () {
  let puzzle = this.word.join('').replaceAll(/\S/g, '*').split('');

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
  if (typeof guess === 'object') {
    guess.forEach((letter) => {
      if (letter.length > 1) {
        const splitString = letter.split('');
        splitString.forEach((stringLetter) => {
          this.guessedLetters.push(stringLetter);
        });
      } else {
        this.guessedLetters.push(letter);
      }
    });
  } else if (typeof guess === 'string') {
    if (guess.length > 1) {
      const splitGuess = guess.split('');
      splitGuess.forEach((guessLetter) => {
        this.guessedLetters.push(guessLetter);
      });
    } else {
      this.guessedLetters.push(guess);
    }
  } else {
    throw TypeError(`Expected array or string, got ${typeof guess}`);
  }
  this.guesses -= 1;
  console.log(this.getPuzzle());
  if (!this.finished) {
    if (this.guesses === 1) {
      console.log('You have one guess left. Last chance ;D');
    } else {
      console.log(`You have ${this.guesses} guesses left`);
    }
  }
};

const game1 = new Hangman('sleep', 3);
game1.makeGuess('e');
game1.makeGuess('s');

const game2 = new Hangman('serendipity', 8, ['e']);
game2.makeGuess('s');
