const gradeCalc = (studentScore, totalScore) => {
  if (typeof studentScore !== 'number' || typeof totalScore !== 'number') {
    throw TypeError('Please provide numbers only');
  }

  const percentGrade = studentScore / totalScore;
  let letterGrade;

  // Determining the possible letter grades
  if (percentGrade >= 0.9) {
    letterGrade = 'A';
  } else if (percentGrade < 0.9 && percentGrade >= 0.8) {
    letterGrade = 'B';
  } else if (percentGrade < 0.8 && percentGrade >= 0.7) {
    letterGrade = 'C';
  } else if (percentGrade < 0.7 && percentGrade >= 0.6) {
    letterGrade = 'D';
  } else if (percentGrade < 0.6 && percentGrade >= 0) {
    letterGrade = 'F';
  } else {
    letterGrade = 'wtf';
  }

  // Grammar-based return of the function
  const output = `${studentScore}/${totalScore} -> You got an ${letterGrade} (${
    percentGrade * 100
  }%)!`;
  return letterGrade === 'A' || letterGrade === 'F' ? output : output.replace('an', 'a');
};

// Calls the function with our provided values
try {
  const exampleScore = gradeCalc(19, 20);
  console.log(exampleScore);
} catch (TypeError) {
  console.error(TypeError.message);
}
