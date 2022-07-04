const findKey = (obj, callback) => {

  for (let key in obj) {
    if (!callback(obj[key])) {
      continue;
    }
    return key;
  }
};

module.exports = findKey;