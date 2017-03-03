const BinExp = require('./binexp.js');

class binexpAdd extends BinExp {
  constructor(binexp, addop, exp1) {
    super();
    this.exp1 = exp1;
    this.binexp = binexp;
    this.op = addop;
  }

  toString() {
    return `(${this.binexp} ${this.op} ${this.exp1})`;
  }
}

module.exports = binexpAdd;
