// Multiple arguments
const add = (a, b, c) => {
  return a + b + c;
};

const result = add(10, 1, 5);
console.log(result);

// Default arguments
const getScoreText = (name = 'anonymous', score = 0) => {
  // return "Name: " + name + " - Score: " + score;
  return `Name: ${name} - Score: ${score}`;
};

const scoreText = getScoreText(undefined, 99);
console.log(scoreText);

// Challenge area

const getTip = (total, tipPercent = 0.2) => {
  const tipAmount = total * tipPercent;
  // return "Total: " + total + " - Tip: " + tipAmount;
  // return `Total: ${total} - Tip: ${tipAmount}`;
  return `A ${tipPercent * 100}% tip on $${total} would be $${tipAmount}`;
};

const tipping = getTip(50);
const tippingExtra = getTip(60, 0.3);
const challengeTip = getTip(40, 0.25);

console.log(`\n${tipping}`);
console.log(tippingExtra);
console.log(challengeTip);

// Learning about template strings

const myName = 'Uvuvwevwevwe Onyetenyevwe Ugwemubwem Osas';
const ngStates = 36;

console.log(`\nMy name na ${myName} -- here in my homeland of Nigeria we have ${ngStates} states`);
