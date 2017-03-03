const Exp1 = require('./exp1.js');

class exp1Mult extends Exp1 {
  constructor(exp1, op, exp2) {
    super();
    this.exp1 = exp1;
    this.exp2 = exp2;
    this.op = op;
  }

  toString() {
    return `(${this.exp1} ${this.op} ${this.exp2})`;
  }
}

module.exports = exp1Mult;
