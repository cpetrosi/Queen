const Let = require('./let.js');

class letExp extends Let {
  constructor(exp) {
    super();
    this.exp = exp;
  }

  toString() {
    return `${this.exp}`;
  }
}

module.exports = letExp;
