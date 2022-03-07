let temp = 78;

// Logical and operator -- True if both sides are true, false otherwise
// Logical or operator -- True if at least one side is true, false otherwise

if (temp >= 63 && temp <= 83) {
  console.log("It is pretty nice out");
} else if (temp <= 0 || temp >= 120) {
  console.warn("Better not go outside");
} else {
  console.log("Whatever");
}

// Challenge area

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log("\nOnly offer vegan dishes");
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log("\nBe sure to offer some vegan options");
} else {
  console.log("\nOffer anything on the menu");
}
