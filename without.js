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

const without = function (initialArray, elementArray) {
  for (let i = 0; i < initialArray.length; i++) {
    for (let j = 0; j < elementArray.length; j++) {
      if (initialArray[i] === elementArray[j]) {
        initialArray.splice(i, 1);
      }
    }
    return initialArray;
  }
}

console.log(without([1, 2, 3], [1]))