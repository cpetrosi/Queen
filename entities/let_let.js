const Let = require('./let.js');

class letLet extends Let {
  constructor(id, exp, rest) {
    super();
    this.id = id;
    this.exp = exp;
    this.rest = rest;
  }

  toString() {
    return `let ${this.id} = ${this.exp} in ${this.rest}`;
  }
}

module.exports = letLet;
