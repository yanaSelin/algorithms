const defaultConfig = [['{', '}'], ['[', ']'], ['(', ')']];

const searchInConfig = (bracket, config) => (
  config.reduce((acc, el, i) => {
    if (el[0] === bracket) {
      return { isOpened: true, double: el[0] === el[1], index: i }
    }
    if (el[1] === bracket) {
      return { isClosed: true, index: i }
    }
    return acc;
  }, null)
);

module.exports = function isBalanced(string = '', config = defaultConfig) {
  const opened = [];
  const length = string.length;

  for (let i = 0; i < length; i += 1) {
    const bracket = searchInConfig(string[i], config);
    if (!bracket) {
      continue;
    }
    const isDoubleOpened = bracket.double && opened.includes(bracket.index);
    if (isDoubleOpened && opened.pop() !== bracket.index) {
      return false;
    }
    if (bracket.isOpened && !isDoubleOpened) {
      opened.push(bracket.index);
      continue;
    }
    if (bracket.isClosed && opened.pop() !== bracket.index) {
      return false;
    }
  }

  return opened.length === 0;
};