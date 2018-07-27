const assert = require('assert');
const isSorted = require('../src/isSorted');

describe('isSorted', () => {
  it('without arguments', () => {
    assert.equal(isSorted(), true);
  });

  it('[]', () => {
    assert.equal(isSorted([]), true);
  });

  it('[-Infinity, -5, 0, 3, 9]', () => {
    assert.equal(isSorted([-Infinity, -5, 0, 3, 9]), true);
  });

  it('[3, 9, -3, 10]', () => {
    assert.equal(isSorted([3, 9, -3, 10]), false);
  });
});