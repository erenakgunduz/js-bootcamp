// Global scope (convertFtoC, tempOne, tempTwo)
// --Local scope (fahrenheit, celsius)
// ----Local scope (isFreezing)

const ConvertFtoC = (fahrenheit) => {
  const celsius = (fahrenheit - 32) * (5 / 9);

  if (celsius <= 0) {
    const isFreezing = true;
  }

  return celsius;
};

const tempOne = ConvertFtoC(32);
const tempTwo = ConvertFtoC(68);

console.log('------');
console.log(tempOne);
console.log(tempTwo);
