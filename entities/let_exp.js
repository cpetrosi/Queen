const Let = require('./let.js');

class letExp extends Let {
  constructor(exp) {
    super();
    this.exp = exp;
  }

  toString() {
    return `${this.exp}`;
  }

  analyze(context) {
    this.exp.analyze(context);
    this.type = this.exp.type;
  }

  optimize() {
    this.exp.optimize();
    return this;
  }
}

module.exports = letExp;
