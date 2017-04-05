const Exp = require('./exp.js');
const Type = require('./type.js');

class expString extends Exp {
  constructor(body) {
    super();
    this.body = body;
  }

  toString() {
    return `${this.body}`;
  }

  analyze(context) {
    this.type = Type.STRING;
  }
}

module.exports = expString;
