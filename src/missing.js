module.exports = function missing(array = []) {
  const sum = array.reduce((acc, el) => acc + el, 0);
  const length = array.length;
  const missingNumber = ((length + 1) * (length + 2) / 2) - sum;
  return missingNumber > length ? null : missingNumber;
};