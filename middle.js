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

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// implement a function that returns the middle element
const middle = function(array) {
  let midpoint = null;
  let midElements = [];
  if (array.length <= 2) {  
    // if there's an array that has only 1 or 2 elements, no middle, then return an empty array
    return midElements;
  } else {
    
      // console.log(array[i])
      if (array.length % 2 === 0) {
        midpoint = array.length / 2;
        let midIndex = midpoint - 1;
        let midIndex2 = midpoint;
        midElements.push(array[midIndex], array[midIndex2]); 
        return midElements
   // if there's an array with even number of elements, return the middle two elements       
        
      } else if (array.length % 2 === 1) {
        midpoint = Math.ceil(array.length / 2);
        let midIndex = midpoint - 1;
        midElements.push(array[midIndex]);
        return midElements;
 // if there's an array with odd number of elements, return the middle element
      }
    
  }
}

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])