const {
  NotImplementedError
} = require('../extensions/index.js');

class VigenereCipheringMachine {
  constructor(isReversed) {
    this.isReversed = isReversed;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw Error('Incorrect arguments!');
    }
    let count = 0;
    let newKey = ''; // LEMONLEMONLE
    let newMessage = message.toUpperCase();
    const LEN = message.length;
    let keyArr = [];
    let messageArr = [];
    let resultArr = [];
    let result = [];
    // получение строки newKey длиной с message
    for (let i = 0; i < LEN; i++) {
      if (count < key.length) {
        count++
      } else {
        count = 1;
      }
      newKey = newKey + ((key[count - 1]).toUpperCase())
    }
    // преобразование ключа в массив из порядковых номеров его букв
    for (let i = 0; i < newKey.length; i++) {
      keyArr.push(newKey.charCodeAt(i) - 65)
    }
    //преобразование сообщения 
    for (let i = 0; i < LEN; i++) {
      if ((newMessage.charCodeAt(i) < 91) && (newMessage.charCodeAt(i) > 64)) {
        messageArr.push(newMessage.charCodeAt(i))
      } else {
        messageArr.push(newMessage[i])
      }
    }
    // сложение массивов
    let j = 0;
    for (let i = 0; i < LEN; i++) {
      if ((messageArr[i] < 91) && (messageArr[i] >= 65)) {
        if (messageArr[i] + keyArr[j] < 91) {
          resultArr.push(+messageArr[i] + keyArr[j])
        } else {
          resultArr.push(+messageArr[i] + keyArr[j] - 26)
        }
        j += 1
      } else {
        resultArr.push(messageArr[i])
      }
    }
    // преобразование в буквы 
    for (let i = 0; i < LEN; i++) {
      if ((resultArr[i] < 91) && (resultArr[i] > 64)) {
        result = result + String.fromCharCode(resultArr[i])
      } else {
        result = result + resultArr[i]
      }
    }
    if (this.isReversed === false) {
      return result.split('').reverse().join('');
    } else {
      return result;
    }


  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw Error('Incorrect arguments!')
    }
    let count = 0;
    let newKey = ''; // LEMONLEMONLE
    let newMessage = encryptedMessage.toUpperCase();
    const LEN = encryptedMessage.length;
    let keyArr = [];
    let messageArr = [];
    let resultArr = [];
    let result = '';
    for (let i = 0; i < LEN; i++) {
      if (count < key.length) {
        count++
      } else {
        count = 1;
      }
      newKey = newKey + ((key[count - 1]).toUpperCase())
    }
    // console.log(`newMessage      ${newMessage}`);
    // console.log(`newKey     ${newKey}`);
    // преобразование ключа в массив из порядковых номеров его букв
    for (let i = 0; i < newKey.length; i++) {
      keyArr.push(newKey.charCodeAt(i) - 65)
    }
    // console.log(`keyArr       ${keyArr}`);
    //преобразование сообщения 
    for (let i = 0; i < LEN; i++) {
      if ((newMessage.charCodeAt(i) < 91) && (newMessage.charCodeAt(i) > 64)) {
        messageArr.push(newMessage.charCodeAt(i))
      } else {
        messageArr.push(newMessage[i])
      }
    }
    // if (this.notReversed == true) {
    //   messageArr;
    // } else messageArr.reverse()
    // console.log(`messageArr ${messageArr}`);
    // сложение массивов
    let j = 0;
    for (let i = 0; i < LEN; i++) {
      if ((messageArr[i] < 91) && (messageArr[i] >= 65)) {
        if (messageArr[i] - keyArr[j] > 64) {
          resultArr.push(+messageArr[i] - keyArr[j])
        } else {
          resultArr.push(+messageArr[i] - keyArr[j] + 26)
        }
        j += 1

      } else {
        resultArr.push(messageArr[i])
      }
    }
    // console.log(`resultArr  ${resultArr}`);
    // преобразование в буквы 
    for (let i = 0; i < LEN; i++) {
      if ((resultArr[i] < 91) && (resultArr[i] > 64)) {
        result = result + String.fromCharCode(resultArr[i])
      } else {
        result = result + resultArr[i]
      }
    }
    if (this.isReversed === false) {
      return result.split('').reverse().join('');
    } else {
      return result;
    }
  }


}

module.exports = {
  VigenereCipheringMachine
};
