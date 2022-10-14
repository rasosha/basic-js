const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  arr: [],
  addLink(value) {
    this.arr.push(`( ${'' + value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof (position) !== 'number' || position < 1 || position > this.getLength()) {
      this.arr = [];
      throw Error("You can't remove incorrect link!");
    } else {
      this.arr.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  getLength() {
    return this.arr.length;
  },
  finishChain() {
    let str = this.arr.join('~~');
    this.arr = [];
    return str;
  }
}


module.exports = {
  chainMaker
};
