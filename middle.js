const middle = function(array) {
  output = [];
  const middleIndex = array[Math.floor(array.length / 2)];
  for (let i = 0; i < array.length; i++) {
    if (array.length <= 2) {
      return output;
    } else if (array.length % 2 === 0 + 1 && array[i] === middleIndex) {
      output.push(array[i]);
    } else if (array.length % 2 === 0 && array[i] === middleIndex) {
      output.push(array[i - 1]);
      output.push(array[i] = middleIndex);
    }
  }
  return output;
};

module.exports = middle;