const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
  const results = [];
  for (let item in array) {
    results.push(callback(array[item], item, array));
  }
  return results
}

const testOne = map(words, num => num + ' test');
console.log(testOne);
