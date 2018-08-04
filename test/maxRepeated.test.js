const assert = require('assert');
const maxRepeated = require('../src/maxRepeated');

describe('maxRepeated', () => {
  it('should return null without arguments', () => {
    assert.equal(maxRepeated(), null);
  });

  it('should return null with empty array', () => {
    assert.equal(maxRepeated([]), null);
  });

  it('should return value of most repeated item (items)', () => {
    assert.deepEqual(maxRepeated([1, 1, 4, 3]), [1]);
    assert.deepEqual(maxRepeated([2, 3, 2, 4, 3, 3]), [3]);
    assert.deepEqual(maxRepeated([5, 8, 1, 4, 8, 2, 1]), [8, 1]);
  });
});