const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {
  console.log(date);
  if (!date) {
    return ('Unable to determine the time of year!')
  } else if (!(date instanceof Date)) {
    throw Error('Invalid date!')
  } else if (Object.getOwnPropertyNames(date).length > 0) {
    throw Error('Invalid date!')
  } else {
    let month = date.getMonth()+1
    console.log(month);
    let result = '';
    switch (month) {
      case 1: case 2: case 12:
        result = 'winter';
        break;
      case 3: case 4: case 5:
        result = 'spring';
        break;
      case 6: case 7: case 8:
        result = 'summer';
        break;
      case 9: case 10: case 11:
        result = 'autumn';
        break;
      case undefined:
        result = false;
        break;
    }
    return result
  }
}

let x = getSeason()
console.log(x);



module.exports = {
  getSeason
};
