const findKeyByValue = function(obj, value) {
  
  const keys = Object.keys(obj);

  for (let key of keys) {
    if (obj[key] === value) {
      return key;
    }
  }
};