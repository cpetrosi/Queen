const Let = require('./let.js');

class letLet extends Let {
  constructor(id, exp, rest) {
    super();
    this.id = id;
    this.exp = exp;
    this.rest = rest;
  }

  toString() {
    if (`${this.rest}`) {
      return `let ${this.id} = ${this.exp} in ${this.rest}`;
    }
    return `let ${this.id} = ${this.exp}`;
  }
}

module.exports = letLet;
