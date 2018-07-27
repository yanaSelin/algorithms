module.exports = function isBalanced(string = '') {
  const opened = [];
  const length = string.length;

  for (let i = 0; i < length; i += 1) {
    if (string[i] === '{') {
      opened.push('{');
      continue;
    }
    if (string[i] === '}' && opened.pop() !== '{') {
      return false;
    }
  }

  return opened.length === 0;
};