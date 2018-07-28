module.exports = function includes(array = [], value) {
  if (array.length <= 1) {
    return array.length === 1 && array[0] === value;
  }

  const key = Math.floor(array.length / 2);
  if (array[key] === value) {
    return true;
  }

  return array[key] < value
    ? includes(array.slice(key), value)
    : includes(array.slice(0, key), value);
}
