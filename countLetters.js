const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
