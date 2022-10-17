const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let result = ''
  for (let i = email.length -1 ; i >0 ; i--) {
      result = result + email[i]
  }
  let ind = result.indexOf('@')
  console.log(result);
  
  return result.slice(0, ind).split('').reverse().join('')
}

// console.log(getEmailDomain('example-indeed@strange-example.com'));

module.exports = {
  getEmailDomain
};
