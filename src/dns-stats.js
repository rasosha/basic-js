const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = []
  let result = {}
  for (domain of domains) {
    arr.push(domain.split('.').reverse())
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i].unshift('');
    for (let j = 1; j < arr[i].length; j++) {
      (arr[i])[j] = '.' + (arr[i])[j]
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr[i].length; j++) {
      (arr[i])[j] = (arr[i])[j - 1] + (arr[i])[j]
      console.log(i,j);
    }
    arr[i].splice(0,1)
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (result.hasOwnProperty((arr[i])[j])) {
        result[(arr[i])[j]] += 1
      } else {
        result[(arr[i])[j]] = 1
      }
    }
  }
  return result
}

// let x = ['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']
// console.log(getDNSStats(x));

module.exports = {
  getDNSStats
};
