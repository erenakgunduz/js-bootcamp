// Temperature converter

// Old school way
// function ConvertFtoC(fahrenheit) {
//   let celsius = (parseInt(fahrenheit) - 32) * (5 / 9);
//   return celsius;
// }

// Using object to have it all in one function
const tempConverter = (fahrenheit) => {
  let celsius = (Number(fahrenheit) - 32) * (5 / 9);

  return {
    celsius: celsius,
    kelvin: celsius + 273.15,
  };
};

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("\nTemperature in °F: ", (myTemp) => {
  // Only need to call the function once, then we can use the returned properties
  let temp = tempConverter(myTemp);

  console.log("\nTemperature in °C: " + parseFloat(temp.celsius.toFixed(2)));
  console.log(
    `\nTemperature in Kelvin: ${parseFloat(temp.kelvin.toFixed(2))} K\n`
  );

  readline.close();
});
