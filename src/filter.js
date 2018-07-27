module.exports = function filter(array = [], callback = () => true) {
  return array.reduce((acc, el) => {
    if (callback(el)) {
      acc.push(el)
    }
    return acc;
  }, []);
};