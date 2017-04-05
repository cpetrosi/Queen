const Exp = require('./exp.js');

class expParens extends Exp {
  constructor(body) {
    super();
    this.body = body;
  }

  toString() {
    return `(${this.body})`;
  }

  analyze(context) {
    this.body.analyze(context);
    this.type = this.body.type;
  }
}

module.exports = expParens;
