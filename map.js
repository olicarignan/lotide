const map = function(array, callback) {
  const results = [];
  for (let item in array) {
    results.push(callback(array[item], item, array));
  }
  return results
}

module.exports = map;