const assert = require('assert');
const debounce = require('../src/debounce');

describe('debounced', () => {
  const calls = [];
  const spy = (n) => calls.push(n);

  it('should return function, that can be called only one time till passed dalay ends', async () => {
    const debounced = debounce(spy, 100);
    debounced(1)
    debounced(2)
    debounced(3)
    assert.deepEqual(calls, []);
    await new Promise(resolve => setTimeout(resolve, 100))
    assert.deepEqual(calls, [3]);
  });
});
