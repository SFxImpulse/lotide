const countLetters = function(str) {

  const letters = {};

  const string = str.split(' ').join('');
  const finalString = string.toLowerCase();

  for (const val of finalString) {
    if (letters[val]) {
      letters[val] += 1;
    } else {
      letters[val] = 1;
    }
  }
  return letters;
};