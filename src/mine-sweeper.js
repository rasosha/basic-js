const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  let arr = []
  for (let i = 0; i < matrix.length; i++) {
    arr.push([])
    for (let j = 0; j < matrix[i].length; j++) {
      arr[i].push(0)
      // if ((matrix[i])[j]) {
      //   (arr[i])[j] = 0
      // }
    }
  }
  console.log(arr);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j]) {
        if (i > 0) {
          if (j > 0) arr[i - 1][j - 1] += 1;
          arr[i - 1][j] += 1;
          if (j < arr[i].length - 1) arr[i - 1][j + 1] += 1;
        }
        if (j > 0) arr[i][j - 1] += 1;
        if (j < arr[i].length - 1) arr[i][j + 1] += 1;
        if (i < arr.length - 1) {
          if (j > 0) arr[i + 1][j - 1] += 1;
          arr[i + 1][j] += 1;
          if (j < arr[i].length - 1) arr[i + 1][j + 1] += 1;
        }
      }
    }
  }
  // 
  // console.log(arr);
  return arr
  // console.log(matrix);
}

minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false],
])


module.exports = {
  minesweeper
};
