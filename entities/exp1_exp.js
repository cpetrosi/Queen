const Exp1 = require('./exp1.js');

class exp1Exp extends Exp1 {
  constructor(exp1) {
    super();
    this.exp1 = exp1;
  }

  toString() {
    return `${this.exp1}`;
  }
}

module.exports = exp1Exp;
