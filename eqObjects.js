const eqObjects = function(object1, object2) {

  const obj1keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);

  if (obj1keys.length !== obj2Keys.length) {
    return false;
  }

  for (let key of obj1keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;