module.exports = function reduce(array = [], callback = a => a, acc = null) {
  array.forEach((el, i, arr) => acc = callback(acc, el, i, arr));
  return acc;
};