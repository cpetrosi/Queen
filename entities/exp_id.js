const Exp = require('./exp.js');

class expId extends Exp {
  constructor(id) {
    super();
    this.id = id;
  }

  toString() {
    return `${this.id}`;
  }

  analyze(context) {
    if (context.hasBeenDeclared(this.id)) {
      const val = context.getValue(this.id);
      this.type = val.type;
    } else {
      throw new Error(`😡 UNDECLARED VARIABLE: ${this.id} has not been declared.`);
    }
  }

  optimize() {
    return this;
  }
}

module.exports = expId;
