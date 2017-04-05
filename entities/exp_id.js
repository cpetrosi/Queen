const Exp = require('./exp.js');

class expId extends Exp {
  constructor(id) {
    super();
    this.id = id;
  }

  analyze(context) {
    if (context.hasBeenDeclared(this.id)) {
      const val = context.getValue(this.id);
      val.analyze(context);
      this.type = val.type;
    } else {
      throw new Error(`UNDECLARED VARIABLE: ${this.id} has not been declared.`);
    }
  }

  toString() {
    return `${this.id}`;
  }
}

module.exports = expId;
