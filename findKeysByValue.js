const assertEqual = require('../assertEqual2');

const findKeyByValue = function (object, value) {
  for (key in object) {

    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
module.exports = findKeyByValue;