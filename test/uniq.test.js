const assert = require('assert');
const uniq = require('../src/uniq');

describe('uniq', () => {
  it('should work without array', () => {
    assert.deepEqual(uniq(), []);
  });

  it('should work with empty array', () => {
    assert.deepEqual(uniq([]), []);
  });

  it('should return uniq values from passed array', () => {
    assert.deepEqual(uniq([1, 4, 2, 2, 3, 4, 8]), [1, 4, 2, 3, 8]);
  });
});