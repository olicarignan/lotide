const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const takeUntil = function(array, callback) {
  let result = [];
  for (let i = 0; i < array.length && callback(array[i]) === false; i++) {
      result.push(array[i]);
  }
  return result;
} 

const testOne = takeUntil(data1, x => x < 0);
console.log(testOne);