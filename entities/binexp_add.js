const BinExp = require('./binexp.js');

class binexpAdd extends BinExp {
  constructor(exp1, addop, binexp) {
    super();
    this.exp1 = exp1;
    this.binexp = binexp;
    this.op = addop;
  }

  toString() {
    return `${this.exp1} ${this.op} ${this.binexp}`;
  }
}

module.exports = binexpAdd;
