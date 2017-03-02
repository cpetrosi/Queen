const Exp1 = require('./exp1.js');

class exp1Mult extends Exp1 {
  constructor(exp1, binexp) {
    super();
    this.exp1 = exp1;
    this.binexp = binexp;
  }

  toString() {
    return `${this.exp1} * ${this.binexp}`;
  }
}

module.exports = exp1Mult;
