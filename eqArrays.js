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

module.exports = eqArrays;
