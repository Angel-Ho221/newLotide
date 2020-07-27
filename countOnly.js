const assertEqual = require('../assertEqual2');
const countOnly = function (allItems, itemsToCount) {
  let answer = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (answer[item]) {
        answer[item]++;
      } else {
        answer[item] = 1;
      }
    }
  }
  return answer;
}

module.exports = countOnly;

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);