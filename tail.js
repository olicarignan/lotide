const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌👌👌Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    console.log(`🚨🚨🚨Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(input) {
  let output = [];
  for (let i = 1; i < input.length; i++) {
    output += input[i];
  }
  return output;
};

let result = tail([1, 2, 3, 4, 5]);

assertEqual(result.length, 4);