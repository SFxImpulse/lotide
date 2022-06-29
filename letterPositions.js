const letterPositions = function(sentence) {
  
  const results = {};

  let lower = sentence.toLowerCase();

  for (let i = 0; i < lower.length; i++) {
    const letter = lower[i];
    if (letter === ' ') {
      continue;
    }

    if (!results[letter]) {
      results[letter] = [];
    }
    results[letter].push(i)

  } 
  return results;
};

console.log(letterPositions("hello"));