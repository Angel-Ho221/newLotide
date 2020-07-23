function assertObjectsEqual(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

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


assertObjectsEqual(ab, ba) // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false