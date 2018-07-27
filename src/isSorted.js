module.exports = function isSorted(array = []) {
  return array.every((el, i, arr) => i === 0 || el > arr[i - 1]);
};