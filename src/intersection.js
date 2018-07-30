module.exports = function intersection(arrays = []) {
  const result = new Map();
  arrays.forEach((array, i) => (
    array.forEach(el => {
      if (result.get(el) === undefined) {
        result.set(el, new Map());
      }
      result.get(el).set(i, true);
    })
  ));
  return Array.from(result.keys()).reduce((acc, el) => {
    if (result.get(el).size === arrays.length) {
      acc.push(el)
    }
    return acc
  }, []);
};