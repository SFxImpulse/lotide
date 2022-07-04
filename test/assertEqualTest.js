const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe('#assertEqual Tests', () => {
  it("returns Assertion Passed if the assertion passes", () => {
    assert.strictEqual(assertEqual(1, 1), '✅✅✅ Assertion Passed: 1 === 1');
  });

  it("returns Assertion Failed if the assertion fails", () => {
    assert.strictEqual(assertEqual(1, 2), '🛑🛑🛑 Assertion Failed: 1 !== 2')
  });
});