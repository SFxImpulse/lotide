const map = (array, callback) => {

  const output = [];

  for (let item of array) {
    output.push(callback(item));
  }

  return output;
};