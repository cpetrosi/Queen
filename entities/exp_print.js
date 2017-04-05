const Exp = require('./exp.js');
const Type = require('./type.js');

class expPrint extends Exp {
  constructor(string) {
    super();
    this.string = string;
  }

  analyze(context) {
    let elementType = Type.STRING;

    if (context.hasBeenDeclared(this.string)) {
      const val = context.getValue(this.string);
      elementType = val.type;
    } else if (!(typeof this.string === 'string' || this.string instanceof String)) {
      throw new Error(`UNDECLARED VARIABLE: ${this.n} has not been declared.`);
    }

    if (this.string.type !== Type.STRING) {
      throw new Error(`TYPE ERROR: ${this.string} is not a string.`);
    }
  }

  toString() {
    return `(print ${this.string})`;
  }
}

module.exports = expPrint;
