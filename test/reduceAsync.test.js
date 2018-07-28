const assert = require('assert');
const reduceAsync = require('../src/reduceAsync');

const a = () => Promise.resolve('a')
const b = () => Promise.resolve('b')
const c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100))

describe('reduce', () => {
  it('should work without callback', async () => {
    assert.deepEqual(await reduceAsync([a, b, c], undefined, []), []);
  });

  it('should work without array', async () => {
    assert.deepEqual(await reduceAsync(undefined, (a, b) => a + b, 0), 0);
  });

  it('should work without acc', async () => {
    assert.deepEqual(await reduceAsync([a, b, c], (a, b) => a + b), 'nullabc');
  });

  it('should work with acync function', async () => {
    assert.deepEqual(
      await reduceAsync([a, b, c], (acc, value) => [...acc, value], []),
      ['a', 'b', 'c'],
    );
    assert.deepEqual(
      await reduceAsync([a, c, b], (acc, value) => [...acc, value], ['d']),
      ['d', 'a', 'c', 'b'],
    );
  });
});