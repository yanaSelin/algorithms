const assert = require('assert');
const factorial = require('../src/factorial');

describe('factorial', () => {
  it('0', () => {
    assert.equal(factorial(0), 1);
  });

  it('1', () => {
    assert.equal(factorial(1), 1);
  });

  it('6', () => {
    assert.equal(factorial(6), 720);
  });

  it('should return null for negative numbers', () => {
    assert.equal(factorial(-15), null);
  });

  it('should return null for fractional numbers', () => {
    assert.equal(factorial(3.9), null);
  });
});