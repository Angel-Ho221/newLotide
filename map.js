const assertArraysEqual = require('./assertArraysEqual');

// const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const box = [];
  for (let element of array) {
    box.push(callback(element))
  }
return box;
}
// test codes
// const results1 = assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
// console.log(results1);
module.exports = map;

