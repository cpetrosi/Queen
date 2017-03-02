const Exp = require('./exp.js');

class expAppend extends Exp {
  constructor(body) {
    super();
    this.body = body;
  }

  toString() {
    return `${this.body}`;
  }
}

module.exports = expAppend;
