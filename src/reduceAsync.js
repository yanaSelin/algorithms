module.exports = async function reduceAsync(array = [], callback = a => a, acc = null) {
  for (let i = 0; i < array.length; i += 1) {
    const value = await array[i]();
    acc = callback(acc, value, i, array)
  }
  return acc;
};