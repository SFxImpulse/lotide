const tail = function(array) {
  
  let tailIndex = ''

  for (let i = 1; i < array.length; i++) {
    tailIndex = array[i]
  }
  return tailIndex;
};

module.exports = tail;