const assert = require('chai').assert;
const head = require('../head');

describe('#head Tests', () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns undefined for [] (empty array)", () => {
    assert.strictEqual(head([]), undefined);
  })
});