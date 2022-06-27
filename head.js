const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else if (actual !== expected) {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

const head = function(array) {
  if (array) {
  return array[0];
  } else if (!array) {
    array[0] === undefined;
    return array[0];
  }
};