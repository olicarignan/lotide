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

assertArraysEqual(['1', '2', '3'], ['1', '2', '3']);