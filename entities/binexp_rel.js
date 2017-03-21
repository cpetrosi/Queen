const BinExp = require('./binexp.js');

class binexpRel extends BinExp {
  constructor(binexp, relop, exp1) {
    super();
    this.exp1 = exp1;
    this.binexp = binexp;
    this.op = relop;
  }

  toString() {
    return `(${this.binexp} ${this.op} ${this.exp1})`;
  }
}

module.exports = binexpRel;
