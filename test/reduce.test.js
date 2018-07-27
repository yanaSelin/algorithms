const assert = require('assert');
const reduce = require('../src/reduce');

describe('reduce', () => {
  it('should work without callback', () => {
    assert.deepEqual(reduce([1, 2, 3, 4], undefined, 0), 0);
  });

  it('should work without array', () => {
    assert.deepEqual(reduce(undefined, (a, b) => a + b, 0), 0);
  });

  it('should work without acc', () => {
    assert.deepEqual(reduce([1, 2, 3, 4], (a, b) => a + b), 10);
  });

  it('[1, 2, 3, 4], (a, b) => a + b, 0', () => {
    assert.deepEqual(reduce([1, 2, 3, 4], (a, b) => a + b, 0), 10);
  });
});