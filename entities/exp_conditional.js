const Exp = require('./exp.js');

class expConditional extends Exp {
  constructor(body) {
    super();
    this.body = body;
  }

  toString() {
    return `${this.body}`;
  }

  analyze(context) {
    this.body.analyze(context);
    this.type = this.body.type;
  }

  optimize() {
    this.body.optimize();
    return this;
  }
}

module.exports = expConditional;
