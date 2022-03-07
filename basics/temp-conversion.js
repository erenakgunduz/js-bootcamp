// Temperature converter

// Old school way
// function ConvertFtoC(fahrenheit) {
//   let celsius = (parseInt(fahrenheit) - 32) * (5 / 9);
//   return celsius;
// }

// Arrow functions
const ConvertFtoC = (fahrenheit) => {
  let celsius = (parseInt(fahrenheit) - 32) * (5 / 9);
  return celsius;
};

const ConvertCtoK = (celsius) => {
  let kelvin = parseFloat(celsius) + 273.15;
  return kelvin;
};

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("\nTemperature in °F: ", (temp) => {
  // Calls the functions and prints the calculations
  let celsiusTemp = ConvertFtoC(temp);
  console.log("\nTemperature in °C: " + Math.round(celsiusTemp));

  let kelvinTemp = ConvertCtoK(celsiusTemp);
  console.log("\nTemperature in Kelvin: " + Math.round(kelvinTemp) + " K");

  readline.close();
});
