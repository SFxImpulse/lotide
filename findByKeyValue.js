const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else if (actual !== expected) {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

const findKeyByValue = function(obj, value) {
  
  const objKeys = Object.keys(obj)
  
  for (let key of objKeys) {
    if (obj[key] === value) {
      return key;
    }
  }
};

// Declare findKeyByValue function.
  // This function takes in an object and a value and returns the key-
  // associated with that value.
  // We can use the "Object.keys" method on the "obj" argument.
  // Then we can iterate through each key until we get the-
  // key that matches the value we want.

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));