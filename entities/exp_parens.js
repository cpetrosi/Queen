const Exp = require('./exp.js');

class expParens extends Exp {
  constructor(body) {
    super();
    this.body = body;
  }

  toString() {
    return `(${this.body})`;
  }
}

module.exports = expParens;
