module.exports = function reverse(string = '') {
  return string.split('').reduceRight((acc, el) => acc + el, '');
};