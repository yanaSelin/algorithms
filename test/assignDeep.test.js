const assert = require('assert');
const assignDeep = require('../src/assignDeep');

describe('assignDeep', () => {
  it('should work without arguments', () => {
    assert.deepEqual(assignDeep(), {});
  });

  it('should return deep asigned object based on passed arguments', () => {
    assert.deepEqual(assignDeep({ a: 1 }, {}), { a: 1 });
    assert.deepEqual(assignDeep({ a: 1 }, { a: 2 }), { a: 2 });
    assert.deepEqual(assignDeep({ a: 1 }, { a: { b: 2 } }), { a: { b: 2 } });
    assert.deepEqual(
      assignDeep({ a: { b: { c: 1 } } }, { a: { b: { d: 2 } }, e: 3 }),
      { a: { b: { c: 1, d: 2 } }, e: 3 }
    );
  });
});