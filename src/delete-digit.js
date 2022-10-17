const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let num = n.toString()//.split('');
  console.log(num);

  let arr = [];
  let resArr = []
  for (let i = 0; i < num.length; i++) {
    arr.push(num)
    console.log(arr);
  }
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i]
    resArr.push(x.substring(0, i)+x.substring(i+1, x.length))
  }
  return Math.max(...resArr)
}
console.log(deleteDigit(1520));

module.exports = {
  deleteDigit
};
