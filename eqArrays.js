const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌👌👌Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    console.log(`🚨🚨🚨Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

  


console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));