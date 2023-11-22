// Temperature converter

// Using object to have it all in one function
const tempConverter = (fahrenheit) => {
  const celsius = (Number(fahrenheit) - 32) * (5 / 9);
  return { celsius, kelvin: celsius + 273.15 };
};

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Temperature in °F: ', (myTemp) => {
  // Only need to call the function once, then we can use the returned properties
  const temp = tempConverter(myTemp);

  console.log(`\nTemperature in °C: ${parseFloat(temp.celsius.toFixed(2))}\n`);
  console.log(`Temperature in Kelvin: ${parseFloat(temp.kelvin.toFixed(2))} K`);

  readline.close();
});
