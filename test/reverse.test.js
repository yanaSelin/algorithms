const assert = require('assert');
const reverse = require('../src/reverse');

describe('reverse', () => {
  it('should work without string', () => {
    assert.deepEqual(reverse(), '');
  });

  it('""', () => {
    assert.deepEqual(reverse(''), '');
  });

  it('abcdef', () => {
    assert.deepEqual(reverse('abcdef'), 'fedcba');
  });
});