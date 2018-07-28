module.exports = async function seq(array = []) {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    const value = await array[i]();
    result.push(value);
  }
  return result;
};