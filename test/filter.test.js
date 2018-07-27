const assert = require('assert');
const filter = require('../src/filter');

describe('filter', () => {
  it('should work without callback', () => {
    assert.deepEqual(filter([1, 2, 3, 4]), [1, 2, 3, 4]);
  });

  it('should work without array', () => {
    assert.deepEqual(filter(), []);
  });

  it('[1, 2, 3, 4], n => n < 3)', () => {
    assert.deepEqual(filter([1, 2, 3, 4], n => n < 3), [1, 2]);
  });
});