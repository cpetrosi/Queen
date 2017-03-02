const BinExp = require('./binexp.js');

class binexpAdd extends BinExp {
  constructor(exp1, binexp) {
    super();
    this.exp1 = exp1;
    this.binexp = binexp;
  }

  toString() {
    return `${this.exp1} + ${this.binexp}`;
  }
}

module.exports = binexpAdd;
