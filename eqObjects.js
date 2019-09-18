const eqObjects = function(object1, object2) {
  
  let objOneKeys = Object.keys(object1);
  let objOneLength = objOneKeys.length;
  let objTwoKeys = Object.keys(object2);
  let objTwoLength = objTwoKeys.length;
  let isTrue = true;

  if (objOneLength !== objTwoLength) {
    isTrue = false;
  }
  for (let keyValue of objOneKeys) {
    if (Array.isArray(object1[keyValue]) && Array.isArray(object2[keyValue])) {
      isTrue = eqArrays(object1[keyValue], object2[keyValue]);
    } else if (object1[keyValue] !== object2[keyValue]) {
      isTrue = false;
    }
  }
  console.log(isTrue);
};


const eqArrays = function (arrayOne, arrayTwo) {
  let isTrue = true
  if (arrayOne.length !== arrayTwo.length) {
    isTrue = false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      isTrue = false;
    }
  }
  return isTrue;
}



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

