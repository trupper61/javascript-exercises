const add = function(numa, numb) {
	return numa+numb
};

const subtract = function(numa, numb) {
	return numa-numb
};

const sum = function(array) {
  return array.reduce((total, curent) => total + curent, 0);
};

const multiply = function(array) {
  return array.reduce((product, curent) => product * curent);
};

const power = function(numa, numb) {
	return Math.pow(numa, numb);
};

const factorial = function(n) {
  if(n === 0) {
    return 1;
  }
  let result = 1;
  for (let i = n; i > 0; i--){
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
