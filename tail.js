const tail = function(input) {
  let output = [];
  for (let i = 1; i < input.length; i++) {
    output += input[i];
  }
  return output;
};

module.exports = tail;