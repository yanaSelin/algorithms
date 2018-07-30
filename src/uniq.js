module.exports = function uniq(array = []) {
  const result = new Map();
  array.forEach(el => result.set(el, true));
  return Array.from(result.keys());
};