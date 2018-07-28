const assert = require('assert');
const includes = require('../src/includes');

describe('includes', () => {
  it('should work without arguments', () => {
    assert.equal(includes(), false);
  });

  it('should return "true" if array includes passed value', () => {
    assert.equal(includes([1, 3, 8, 10], 8), true);
    assert.equal(includes([1, 3, 8, 8, 15], 15), true);
  });

  it('should return "false" if array does not include passed value', () => {
    assert.equal(includes([1, 3, 8, 10, 15], 9), false);
  });
});