const assert = require('assert');

const isPrime = require('./src/isPrime');
const factorial = require('./src/factorial');
const fib = require('./src/fib');

describe('isPrime', () => {
  it('0', () => {
    assert.equal(isPrime(0), false);
  });

  it('1', () => {
    assert.equal(isPrime(1), false);
  });

  it('17', () => {
    assert.equal(isPrime(17), true);
  });

  it('10000000000000', () => {
    assert.equal(isPrime(10000000000000), false);
  });

  it('-17', () => {
    assert.equal(isPrime(-17), false);
  });

  it('1.5', () => {
    assert.equal(isPrime(1.5), false);
  });
});

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
    assert.equal(factorial(-11), null);
  });

  it('should return null for fractional numbers', () => {
    assert.equal(factorial(2.8), null);
  });
});