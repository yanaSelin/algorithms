const assert = require('assert');

const isPrime = require('./src/isPrime');
const factorial = require('./src/factorial');

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