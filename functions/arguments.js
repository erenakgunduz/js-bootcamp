// Multiple arguments
let add = function (a, b, c) {
  return a + b + c;
};

let result = add(10, 1, 5);
console.log(result);

// Default arguments
let getScoreText = function (name = "anonymous", score = 0) {
  // return "Name: " + name + " - Score: " + score;
  return `Name: ${name} - Score: ${score}`;
};

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

// Challenge area

let getTip = (total, tipPercent = 0.2) => {
  let tipAmount = total * tipPercent;
  // return "Total: " + total + " - Tip: " + tipAmount;
  // return `Total: ${total} - Tip: ${tipAmount}`;
  return `A ${tipPercent * 100}% tip on $${total} would be $${tipAmount}`;
};

let tipping = getTip(50);
let tippingExtra = getTip(60, 0.3);
let challengeTip = getTip(40, 0.25);

console.log("\n" + tipping);
console.log(tippingExtra);
console.log(challengeTip);

// Learning about template strings

let myName = "Uvuvwevwevwe Onyetenyevwe Ugwemubwem Osas";
let ngStates = 36;

console.log(
  `\nMy name na ${myName} -- here in my homeland of Nigeria we have ${ngStates} states`
);
