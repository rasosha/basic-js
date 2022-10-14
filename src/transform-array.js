const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */



 function transform(arr) {
  let discardNext = '--discard-next' //excludes the next element of the array from the transformed array.
  let discardPrev = '--discard-prev' //excludes the previous element of the array from the transformed array.
  let doubleNext = '--double-next' //duplicates the next element of the array in the transformed array.
  let doublePrev = '--double-prev' //duplicates the previous element of the array in the transformed array.
  let result = []
  if (!(Array.isArray(arr))) {
    throw Error("'arr' parameter must be an instance of the Array!");
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (
          arr[i] == discardNext
          &&
          !!arr[i+1]
      ) {
          i += 1;
      } else if (
          arr[i] == discardPrev
          &&
          !!arr[i - 1]
          &&
          arr[i-2] != discardNext
      ) {
        result.pop();
      } else if (
          arr[i] == doubleNext
          &&
          !!arr[i+1]
      ) {
        result.push(arr[i+1]);
      } else if (
          arr[i] == doublePrev
          &&
          !!arr[i - 1]
          &&
          arr[i-2] != discardNext
      ) {
        result.push(arr[i-1]);
      } else {
        if (
          arr[i] !== discardNext &&
          arr[i] !== discardPrev &&
          arr[i] !== doubleNext &&
          arr[i] !== doublePrev
        ) result.push(arr[i])
      //   else i +=1
      }
    }
  }
  return result
}


module.exports = {
  transform
};
