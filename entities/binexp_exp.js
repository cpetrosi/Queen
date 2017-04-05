const BinExp = require('./binexp.js');

class binexpExp extends BinExp {
  constructor(exp1) {
    super();
    this.exp1 = exp1;
  }

  toString() {
    return `${this.exp1}`;
  }

  analyze(context) {
    this.exp1.analyze(context);
    this.type = this.exp1.type;
  }
}

module.exports = binexpExp;
