// Our map function will take in two arguments:

// An array to map
// A callback function

//The map function will return a new array based on the results of the callback function.
const eqArrays = function (arr1, arr2) {
  let equal = true
  if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) {
    equal = false
    return equal;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        equal = true;
      } else {
        equal = false
      }
    }
  }
  return equal;
};

function assertArraysEqual(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const box = [];
  for (let element of array) {
    box.push(callback(element))
  }
return box;
}
// test codes



