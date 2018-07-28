module.exports = function uniq(array = []) {
  const result = {};
  array.forEach(el => result[el] = true);
  return Object.keys(result).map(el => el == +el ? +el : el);
};