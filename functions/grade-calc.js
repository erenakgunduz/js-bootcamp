let gradeCalc = (studentScore, totalScore) => {
  let percentGrade = studentScore / totalScore;
  let letterGrade;

  // Determining the possible letter grades
  if (percentGrade >= 0.9) {
    letterGrade = "A";
  } else if (percentGrade < 0.9 && percentGrade >= 0.8) {
    letterGrade = "B";
  } else if (percentGrade < 0.8 && percentGrade >= 0.7) {
    letterGrade = "C";
  } else if (percentGrade < 0.7 && percentGrade >= 0.6) {
    letterGrade = "D";
  } else if (percentGrade < 0.6 && percentGrade >= 0) {
    letterGrade = "F";
  } else {
    letterGrade = "wtf";
  }

  // Grammar-based return of the function
  if (letterGrade === "A" || letterGrade === "F") {
    return `${studentScore}/${totalScore} -> You got an ${letterGrade} (${
      percentGrade * 100
    }%)!`;
  } else {
    return `${studentScore}/${totalScore} -> You got a ${letterGrade} (${
      percentGrade * 100
    }%)!`;
  }
};

// Calls the function with our provided values
let exampleScore = gradeCalc(15, 20);
console.log(exampleScore);
