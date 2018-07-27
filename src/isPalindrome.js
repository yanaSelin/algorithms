module.exports = function isPalindrome(string = '') {
  const sample = string.toLowerCase().split('').filter(char => char !== ' ').join('');
  return sample === sample.split('').reduceRight((acc, el) => acc + el, '');
};