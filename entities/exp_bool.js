const Exp = require('./exp.js');

class expBool extends Exp {
  constructor(body) {
    super();
    this.body = body;
  }

  toString() {
    return `${this.body}`;
  }
}

module.exports = expBool;
