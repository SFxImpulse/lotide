const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail Tests", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns an empty array when the length of the array is 1 or less", () => {
    assert.deepEqual(tail([1]), []);
  });
});