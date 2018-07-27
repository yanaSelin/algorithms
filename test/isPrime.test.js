const assert = require('assert');
const isPrime = require('../src/isPrime');

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