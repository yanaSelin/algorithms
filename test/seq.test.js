const assert = require('assert');
const seq = require('../src/seq');

const a = () => Promise.resolve('a')
const b = () => Promise.resolve('b')
const c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100))

describe('seq', () => {
  it('should work without arguments', async () => {
    assert.deepEqual(await seq(), []);
  });

  it('should return array if values passed async functions', async () => {
    assert.deepEqual(await seq([a, b, c]), ['a', 'b', 'c']);
    assert.deepEqual(await seq([a, c, b]), ['a', 'c', 'b']);
  });
});