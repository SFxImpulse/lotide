const tail = function(array) {

  if (array.length <= 1) {
    return [];
  }

  const tail = array.slice(1);

  return tail;
};

console.log(tail([1]));

module.exports = tail;