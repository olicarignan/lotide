const middle = require('../middle');
const assert = require('chai').assert;

describe('#middle', () => {
  it('returns 2 for [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), 2);
  });
})