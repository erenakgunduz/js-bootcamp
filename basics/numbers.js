// Intro

// let x = 11;
// let num = (x + 1) * 2;

// console.log(num);

// Dog years calculator

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('How old are you? ', (age) => {
  // Confirms the value it received from the user input
  console.log(`So you're ${age} years old. Nice!` + '\n');

  // If it's a number input, parses it and calculates the dog years
  const dogYears = (parseInt(age) + 1) / 7;

  // Easier way but also fixes when not needed
  // console.log("That would be " + dogYears.toFixed(2) + " in dog years.");

  // More complex looking but does the job
  console.log(
    'That would be ' + Math.round((dogYears + Number.EPSILON) * 100) / 100 + ' in dog years.'
  );

  readline.close();

  // Grades challenge (IMPOSSIBLE: Try not to fail euheuhe)
  // I have these here so that they only run+display after the readline closes

  const studentScore = 42;
  const maxScore = 50;
  const percentGrade = (studentScore / maxScore) * 100;

  console.log(`\n` + 'Student grade: ' + percentGrade + '%');
});
