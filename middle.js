const eqArrays = function (arrayOne, arrayTwo) {
  let isTrue;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) {
      isTrue = true;
    } else {
      isTrue = false;
    }
  }
  return isTrue;
}

const assertArraysEqual = function (arrayOne, arrayTwo) {
  let isTrue;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) {
      isTrue = true;
    } else {
      isTrue = false;
    }
  }
  if (isTrue === true) {
    console.log(`👌👌👌Assertion Passed:  ${arrayOne} ===  ${arrayTwo}`);
  } else {
    console.log(`🚨🚨🚨Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
}

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
