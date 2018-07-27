const cash = {};

module.exports = function fib(number) {
  if (number < 0 || Math.floor(number) !== number) {
    return null;
  }

  if (cash[number]) {
    return cash[number];
  }

  switch (number) {
    case 0:
      return 0;
    case 1:
      return 1;
    default:
      cash[number] = fib(number - 1) + fib(number - 2);
      return cash[number];
  }
};