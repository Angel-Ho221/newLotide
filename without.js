const assertArraysEqual = require('./assertArraysEqual');

const without = function (source, itemsToRemove) {
  const fileredItem = source.filter(element => !itemsToRemove.includes(element));
  return fileredItem;
}

module.exports = without;