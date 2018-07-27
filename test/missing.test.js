const assert = require('assert');
const missing = require('../src/missing');

describe('missing', () => {
  it('should return null without arguments', () => {
    assert.equal(missing(), null);
  });

  it('should return null with empty array', () => {
    assert.equal(missing([]), null);
  });

  it('should return missing number in sequence', () => {
    assert.equal(missing([1, 4, 3]), 2);
    assert.equal(missing([2, 3, 4]), 1);
    assert.equal(missing([5, 1, 4, 2]), 3);
  });

  it('should return null if sequence is complete', () => {
    assert.equal(missing([1, 2, 3, 4]), null);
  });
});