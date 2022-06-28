const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else if (!eqArrays(actual, expected)) {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};