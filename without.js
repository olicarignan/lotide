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

module.exports = without;