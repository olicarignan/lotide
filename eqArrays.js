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
};

module.exports = eqArrays;