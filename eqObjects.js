const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// They have the same number of keys
// The value for each key in one object is the same as the value for that same key in the other object

const eqObjects = function (object1, object2) {
  let object1ArrLength = Object.entries(object1).length;
  let object2ArrLength = Object.entries(object2).length;

  if (object1ArrLength !== object2ArrLength) {
    return false;
  }

  for (const [key, value] of Object.entries(object1)) {
    if (!(key in object2)) {
      return false;
    } else if (key in object2) {
      if (Array.isArray(value)) {
        if (!(eqArrays(value, object2[key]))) {
          return false;
        }
      } else {
        if (object2[key] !== value) {
          return false;
        }
      }
    }
  }
  return true;
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };


console.log(eqObjects(ab, ba)) // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false