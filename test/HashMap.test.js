const assert = require('assert');
const HashMap = require('../src/HashMap');

describe('HashMap', () => {
  it('should have method to add pair key-value', () => {
    const map = new HashMap();
    assert.equal(map.set('abc', 123), undefined);
    assert.equal(map.set('foo', 'bar'), undefined);
  });

  it('should have method to get value by key', () => {
    const map = new HashMap();
    map.set('abc', 123);
    map.set('foo', 'bar');
    assert.equal(map.get('foo'), 'bar');
    assert.equal(map.get('abc'), 123);
    map.set('foo', 'baz');
    assert.equal(map.get('foo'), 'baz');
  });
});