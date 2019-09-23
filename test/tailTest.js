const tail = require('../tail');
const assert = require('chai').assert;

// let result = tail([1, 2, 3, 4, 5]);
// assertEqual(result.length, 4);

describe('#tail', () => {
  it('returns an array without the first value', () => {
    assert.strictEqual(tail([1, 2, 3, 4, 5]), '2345');
  })
})