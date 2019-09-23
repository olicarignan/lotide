const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const middle = function (input) {
  let midIndex;
  if (input.length >= 1) {
    midIndex = [];
  } else if (input.length % 2 === 0) {
    midIndex = '[' + Math.floor(input.length / 2) + ', ' + Math.floor(input.length / 2 + 1) + ']';
  } else if (input.length % 2 !== 0) {
    midIndex = '[' + Math.floor(input.length / 2 + 1) + ']';
  }
  return midIndex;
}

module.exports = middle;
