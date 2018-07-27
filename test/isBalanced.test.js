const assert = require('assert');
const isBalanced = require('../src/isBalanced');

describe('isBalanced', () => {
  it('should work without arguments', () => {
    assert.equal(isBalanced(), true);
  });

  it('should return "true" with empty string', () => {
    assert.equal(isBalanced(''), true);
  });

  it('should return "true" if string is balanced', () => {
    assert.equal(isBalanced('{}{}'), true);
  });

  it('should return "false" if string is not balanced', () => {
    assert.equal(isBalanced('{{}'), false);
    assert.equal(isBalanced('}{'), false);
  });

  it('should work with string that have not only brackets', () => {
    assert.equal(isBalanced('foo { bar { baz } boo }'), true);
    assert.equal(isBalanced('foo { bar } }'), false);
    assert.equal(isBalanced('foo { bar { baz }'), false);
  });
});