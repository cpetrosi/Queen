const Exp = require('./exp.js');
const Type = require('./type.js');

class expPrint extends Exp {
  constructor(string) {
    super();
    this.string = string;
    this.type = Type.STRING;
  }

  analyze(context) {
    if (context.hasBeenDeclared(this.string)) {
      const val = context.getValue(this.string);
      if (val.type !== Type.STRING) {
        throw new Error(`😡 TYPE ERROR: ${this.string} is not a string.`);
      }
    } else if (!(this.string.charAt(0) === '"' && this.string.charAt(this.string.length - 1) === '"')) {
      throw new Error(`😡 UNDECLARED VARIABLE: ${this.string} has not been declared.`);
    }
  }

  toString() {
    return `(print ${this.string})`;
  }
}

module.exports = expPrint;
