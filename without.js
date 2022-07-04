const without = function(source, itemsToRemove) {
  let output = [];
  for (let i = 0; i < source.length; i++) {
    let exist = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        exist = true;
        break;
      }
    }
    if (!exist) {
      output.push(source[i])
    }
    exist = false;
  }
  return output;
};

module.exports = without;