// Global scope (convertFtoC, tempOne, tempTwo)
// --Local scope (fahrenheit, celsius)
// ----Local scope (isFreezing)

let ConvertFtoC = (fahrenheit) => {
  let celsius = (fahrenheit - 32) * (5 / 9);

  if (celsius <= 0) {
    let isFreezing = true;
  }

  return celsius;
};

let tempOne = ConvertFtoC(32);
let tempTwo = ConvertFtoC(68);

console.log("------");
console.log(tempOne);
console.log(tempTwo);
