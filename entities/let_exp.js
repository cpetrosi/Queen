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
}

module.exports = letExp;
