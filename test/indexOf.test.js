const assert = require('assert');
const indexOf = require('../src/indexOf');

describe('indexOf', () => {
  it('without arguments', () => {
    assert.equal(indexOf(), -1);
  });

  it('[1, 2, 3], 1', () => {
    assert.equal(indexOf([1, 2, 3], 1), 0);
  });

  it('[1, 2, 3], 4', () => {
    assert.equal(indexOf([1, 2, 3], 4), -1);
  });
});