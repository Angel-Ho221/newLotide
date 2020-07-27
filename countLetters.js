const assertEqual = require('../assertEqual2');

const countLetters = function (sentence) {
  let letterInCount = {};

  for (let letter of sentence) {
    if (letter !== " ") {
      if (letter in letterInCount) {
        letterInCount[letter]++;
      } else if (!(letter in letterInCount)) {
        letterInCount[letter] = 1
      }
    }
  }
  return letterInCount;
}

module.exports = countLetters;