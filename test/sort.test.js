const assert = require('assert');
const sort = require('../src/sort');

describe('sort', () => {
  it('should work without arrays', () => {
    assert.deepEqual(sort(), []);
  });

  it('should work with empty array', () => {
    assert.deepEqual(sort([]), []);
  });

  it('should return sorted array', () => {
    assert.deepEqual(sort([-4, 1, Infinity, 3, 3, 0]), [-4, 0, 1, 3, 3, Infinity]);
  });
});