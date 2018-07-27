module.exports = function factorial(number) {
  if (number < 0 || Math.floor(number) !== number) {
    return null;
  }
  if (number === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= number; i += 1) {
    result *= i;
  }
  return result;
};