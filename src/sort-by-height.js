const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrIndexes = []
  let arrHeith = []
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '-1') {
      arrIndexes.push(i)
    } else {
      arrHeith.push(arr[i])
    }
  }
  arrHeith.sort((a,b) => a-b)
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == -1) {
      result.push(-1)
    } else {
      result.push(arrHeith[j])
      j++
    }
  }
  // console.log(arr);
  // console.log('Indexes:', arrIndexes);
  // console.log('Heithes:', arrHeith);
  // console.log(result);
return result
}
console.log(sortByHeight([4, 2, 9, 11, 2, 16]));

module.exports = {
  sortByHeight
};
