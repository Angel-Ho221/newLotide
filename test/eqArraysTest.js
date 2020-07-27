const assertEqual = require('../assertEqual2');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1], [2, 3]), false);