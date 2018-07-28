const assert = require('assert');
const isBalanced = require('../src/isBalanced');

const config1 = [['1', '2'], ['3', '4'], ['5', '6']];
const config2 = [['(', ')'], ['|', '|']];
const config3 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];

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

  it('should work with three types of brackets by default', () => {
    assert.equal(isBalanced('(foo { bar (baz) [boo] })'), true);
    assert.equal(isBalanced('foo { bar { baz }'), false);
    assert.equal(isBalanced('foo { (bar [baz] } )'), false);
  });

  it('should accept custom brackets config as second argument', () => {
    assert.equal(isBalanced('1134356422', config1), true);
    assert.equal(isBalanced('1134356322', config1), false);
  });

  it('should work with brackets with same open and close characters', () => {
    assert.equal(isBalanced('|()|', config2), true);
    assert.equal(isBalanced('|(|)', config2), false);
    assert.equal(isBalanced('11111561111112288222255778778775555666677776622222', config3), true);
    assert.equal(isBalanced('55555575557777888866766113383484411112222342266666', config3), false);
  });
});