module.exports = (string = '') => {
  const result = [];

  const permute = (array, usedChars = []) => {
    if (!array.length) {
      result.push(usedChars);
    } else {
      for (let i = 0; i < array.length; i += 1) {
        const current = array.slice();
        const next = current.splice(i, 1);
        permute(current, usedChars.concat(next));
      }
    }
  }

  permute(string.split(''));
  return result.map(arr => arr.join(''));
}