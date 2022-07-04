const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));