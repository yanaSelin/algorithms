const assert = require('assert');
const permute = require('../src/permute');

describe('permute', () => {
  it('should work without arguments', () => {
    assert.deepEqual(permute(), ['']);
  });

  it('should work with empty string', () => {
    assert.deepEqual(permute(''), ['']);
  });

  it('should return array of permutation passed string', () => {
    assert.deepEqual(permute('abc'), ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']);
  });
});