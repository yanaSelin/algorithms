module.exports = (array = []) => {
  const result = new Map();
  array.forEach(el => {
    if (result.get(el)) {
      result.set(el, result.get(el) + 1);
    } else {
      result.set(el, 1);
    }
  });
  const maxRepeated = { values: null, repeats: 0 }
  Array.from(result.keys()).forEach(el => {
    if (result.get(el) > maxRepeated.repeats) {
      maxRepeated.repeats = result.get(el);
      maxRepeated.values = [el];
    } else if (result.get(el) === maxRepeated.repeats) {
      maxRepeated.values.push(el);
    }
  })
  return maxRepeated.values;
};
