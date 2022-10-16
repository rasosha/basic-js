const { NotImplementedError } = require('../extensions/index.js');

function repeater(str, options) {
  str = str + ''
  let result = [];
  let newStr = [str.toString()];
  let repeatTimes
  let separator
  let addition
  let additionRepeatTimes
  let additionSeparator
// 
  if (options.hasOwnProperty('repeatTimes')) {
      repeatTimes = options.repeatTimes
  } else {
      repeatTimes = 1
  }
// 
  if (options.hasOwnProperty('separator')) {
      separator = (options.separator+ "").toString() || options.separator
  } else {
      separator = '+';
  }
// 
  if (options.hasOwnProperty('addition')) {
      addition = (options.addition + "").toString()
  } else {
      addition = ""
  }
// 
  if (options.hasOwnProperty('additionRepeatTimes')) {
      additionRepeatTimes = +options.additionRepeatTimes;
  } else {
      additionRepeatTimes = 1;
  }
// 
  if (options.hasOwnProperty('additionSeparator')) {
      additionSeparator = (options.additionSeparator + "").toString()
  } else {
      additionSeparator = '|'
  }
  console.log('rep:', repeatTimes);
  console.log('sep:',separator);
  console.log('add:',addition);
  console.log('addrep:',additionRepeatTimes);
  console.log('addsep:',additionSeparator);

  for (let i = 0; i < additionRepeatTimes; i++) {
      newStr.push(addition);
      if (i < additionRepeatTimes - 1) {
          newStr.push(additionSeparator)
      }
  }
  newStr = newStr.slice(',').join('')
  for (let i = 0; i < repeatTimes; i++) {
      result.push(newStr);
      if (i < repeatTimes - 1) {
          result.push(separator);
      }
  }
  return result.slice(',').join('')
}

module.exports = {
  repeater
};
