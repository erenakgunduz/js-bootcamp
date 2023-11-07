// Temperature converter

// Old school way
// function ConvertFtoC(fahrenheit) {
//   let celsius = (parseInt(fahrenheit) - 32) * (5 / 9);
//   return celsius;
// }

// Arrow functions
const ConvertFtoC = (fahrenheit) => {
  const celsius = (parseInt(fahrenheit, 10) - 32) * (5 / 9);
  return celsius;
};

const ConvertCtoK = (celsius) => {
  const kelvin = parseFloat(celsius) + 273.15;
  return kelvin;
};

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Temperature in °F: ', (temp) => {
  // Calls the functions and prints the calculations
  const celsiusTemp = ConvertFtoC(temp);
  console.log(`\nTemperature in °C: ${Math.round(celsiusTemp)}\n`);

  const kelvinTemp = ConvertCtoK(celsiusTemp);
  console.log(`Temperature in Kelvin: ${kelvinTemp.toFixed(2)} K`);

  readline.close();
});
