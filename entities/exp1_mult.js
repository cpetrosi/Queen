const Exp1 = require('./exp1.js');

class exp1Mult extends Exp1 {
  constructor(exp1, op, binexp) {
    super();
    this.exp1 = exp1;
    this.binexp = binexp;
    this.op = op;
  }

  toString() {
    return `${this.exp1} ${this.op} ${this.binexp}`;
  }
}

module.exports = exp1Mult;
