module.exports = function fib(number) {
  if (number < 0 || Math.floor(number) !== number) {
    return null;
  }

  switch (number) {
    case 0:
      return 0;
    case 1:
      return 1;
    default:
      return fib(number - 1) + fib(number - 2);
  }
};