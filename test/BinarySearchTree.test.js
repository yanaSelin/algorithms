const assert = require('assert');
const BinarySearchTree = require('../src/BinarySearchTree');

describe('BinarySearchTree', () => {
  it('should have method to add passed value', () => {
    const tree = new BinarySearchTree();
    assert.equal(tree.add(5), undefined);
  });

  it('should support adding multiply values', () => {
    const tree = new BinarySearchTree();
    assert.equal(tree.add(1, 2, 3, 4), undefined);
  });

  it('should have method to check if it contains passed value', () => {
    const tree = new BinarySearchTree();
    assert.equal(tree.has(2), false);
    tree.add(2);
    assert.equal(tree.has(2), true);
    assert.equal(tree.has(1), false);
  });
  it('should have method to remove passed value', () => {
    const tree = new BinarySearchTree();
    tree.add(5, 2, 12, 9, 21, 19, 25);
    assert.equal(tree.has(12), true);
    assert.equal(tree.remove(12), undefined);
    assert.equal(tree.has(12), false);
  });
  it('should have method to get number of values', () => {
    const tree = new BinarySearchTree();
    assert.equal(tree.size(), 0);
    tree.add(1, 2, 3, 4)
    assert.equal(tree.size(), 4);
    tree.add(5, 6, 7, 8);
    assert.equal(tree.size(), 8);
  });
});