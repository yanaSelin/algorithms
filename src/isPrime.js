module.exports = function isPrime(number) {
  if (number <= 1 || Math.floor(number) !== number) {
    return false;
  }
  const sqrt = Math.sqrt(number);
  for (let i = 2; i <= sqrt; i += 2) {
    if (number % i === 0) {
      return false;
    };
  }
  return true;
};