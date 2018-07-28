const assert = require('assert');
const intersection = require('../src/intersection');

describe('intersection', () => {
  it('should work without arrays', () => {
    assert.deepEqual(intersection(), []);
  });

  it('should return empty array if second array is not passed', () => {
    assert.deepEqual(intersection([1, 2, 3]), []);
  });

  it('should return intersection of passed arrays', () => {
    const uniqValues = intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]);
    assert.equal([4, 1].every(el => uniqValues.includes(el)), true);
  });

  it('should return empty array is passed arrays dont have common values', () => {
    assert.deepEqual(intersection([1, 5, 4, 2], [7, 12]), []);
  });
});