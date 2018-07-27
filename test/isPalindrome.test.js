const assert = require('assert');
const isPalindrome = require('../src/isPalindrome');

describe('isPalindrome', () => {
  it('should work without arguments', () => {
    assert.equal(isPalindrome(), true);
  });

  it('should return "true" with empty string', () => {
    assert.equal(isPalindrome(''), true);
  });

  it('should return "true" if string is palindrome', () => {
    assert.equal(isPalindrome('abcdcba'), true);
  });

  it('should return "false" if string is not palindrome', () => {
    assert.equal(isPalindrome('abcd'), false);
  });

  it('should be insensitive to spaces and string case', () => {
    assert.equal(isPalindrome('A man a plan a canal Panama'), true);
  });
});