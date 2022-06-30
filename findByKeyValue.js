const findKeyByValue = function(obj, value) {
  
  for (let key in objKeys) {
    if (obj[key] === value) {
      return key;
    }
  }
};