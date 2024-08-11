const convertToCelsius = function(fahr) {
  const celsius = (fahr -32) * (5/9);
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  const fahr = celsius * (9/5) + 32;
  return parseFloat(fahr.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
