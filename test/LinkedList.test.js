const assert = require('assert');
const LinkedList = require('../src/LinkedList');

describe('LinkedList', () => {
  it('should have has method to check if it containes passed value', () => {
    const list = new LinkedList(1, 2, 3);
    assert.equal(list.has(2), true);
    assert.equal(list.has(8), false);
  });

  it('should have add method to add new items', () => {
    const list = new LinkedList(1, 2, 3);
    assert.equal(list.has(4), false);
    list.add(4);
    assert.equal(list.has(4), true);
  });
});