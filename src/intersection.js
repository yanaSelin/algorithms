module.exports = function intersection(array1 = [], array2 = []) {
  const result = {};
  array1.forEach(el => result[el] = [true]);
  array2.forEach(el => result[el] && (result[el][1] = true));
  return Object.keys(result).reduce((acc, el) => {
    if (result[el].length === 2) {
      acc.push(el == +el ? +el : el)
    }
    return acc
  }, []);
};