module.exports = function indexOf(array = [], smth) {
  const length = array.length;
  for (let i = 0; i < length; i += 1) {
    if (smth === array[i]) {
      return i;
    }
  }
  return -1;
};