const Exp = require('./exp.js');
const Type = require('./type.js');

class expNumlit extends Exp {
  constructor(body) {
    super();
    this.body = body;
  }

  toString() {
    return `${this.body}`;
  }

  analyze(context) {
    this.type = Type.NUMBER;
  }
}

module.exports = expNumlit;
