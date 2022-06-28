const eqArrays = function (actual, expected) {
  
  let output;

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] === expected[i]) {
      output = true;
    } else {
      output = false;
    }
  }
  return output;
};