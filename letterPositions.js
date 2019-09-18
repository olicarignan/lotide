const letterPositions = function (sentence) {
  let results = {};
  let newText = sentence.split(' ').join('');
  // for (let i = 0; i < newText.length; i++) {
  //   if (!results[newText[i]]) {
  //     results[newText[i]] = i;
  //   } else {
  //     results[newText[i]] += i;
  //   }
  // }  
  for (let position = 0; position < newText.length; position++) {
    let letter = newText[position];
    if (!results[letter]) {
      results[letter] = [position];
    } else {
      results[letter].push(position);
    }
  }
  return results;
}

console.log(letterPositions('lighthouse in the house'));