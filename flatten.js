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

const flatten = function (input) {
  let output = [];
  for (let i = 0; i < input.length; i++) {
      if (Array.isArray(input[i]) === true) {
        for (let j = 0; j < input[i].length; j++) {
          output.push(input[i][j]);
        }
      } else {
        output.push(input[i]);
      }
    }
    return output;
  } 



console.log(flatten([1, 2, [3, 4], 5, [6]]));