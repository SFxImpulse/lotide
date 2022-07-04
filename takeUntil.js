const takeUntil = (array, callback) => {

  const output = [];

  for (let item of array) {
    if (callback(item)) {
      break;
    }
    output.push(item)
  }
  return output;
};

module.exports = takeUntil;