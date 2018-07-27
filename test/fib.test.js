const assert = require('assert');
const fib = require('../src/fib');

describe('fib', () => {
  it('0', () => {
    assert.equal(fib(0), 0);
  });

  it('1', () => {
    assert.equal(fib(1), 1);
  });

  it('10', () => {
    assert.equal(fib(10), 55);
  });

  it('20', () => {
    assert.equal(fib(20), 6765);
  });

  it('should return null for negative numbers', () => {
    assert.equal(fib(-11), null);
  });

  it('should return null for fractional numbers', () => {
    assert.equal(fib(2.8), null);
  });

  it('should work with numbers less or equal 50', () => {
    assert.equal(fib(50), 12586269025);
  });
});