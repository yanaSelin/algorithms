const assert = require('assert');
const intersection = require('../src/intersection');

describe('intersection', () => {
  it('should work without arrays', () => {
    assert.deepEqual(intersection(), []);
  });

  it('should return intersection of passed arrays', () => {
    assert.deepEqual(intersection([[1, 5, 4, 2], [8, 91, 4, 1, 3]]), [1, 4]);
  });

  it('should return empty array is passed arrays dont have common values', () => {
    assert.deepEqual(intersection([[1, 5, 4, 2], [7, 12]]), []);
  });
});