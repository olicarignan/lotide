const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👌👌👌Assertion Passed:  ${actual} ===  ${expected}`);
  } else {
    console.log(`🚨🚨🚨Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (obj, val) {
  let parameters = Object.keys(obj);
  let values = Object.values(obj);
  for (let position in values) {
    if (values[position] === val) {
      return parameters[position];
    }
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, 'The Expanse'))