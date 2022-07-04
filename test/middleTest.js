const middle = require('../middle');
const assert = require('chai').assert;

// console.log(assertArrayEqual(middle([1, 2, 3]), [2]));
// console.log(assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]));

describe('#middle Tests', () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns ['hello'] for ['oh', 'hello', 'there']", () => {
    assert.deepEqual(middle(['oh', 'hello', 'there']), ['hello']);
  });

  it("returns ['hello', 'there'] for ['oh', 'hello', 'there', 'friend']", () => {
    assert.deepEqual(middle(['oh', 'hello', 'there', 'friend']), ['hello', 'there']);
  });

  it("returns [] (empty array) for any array with a length of 1 or 2 indices", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
});