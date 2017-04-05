const Exp = require('./exp.js');
const Type = require('./type.js');

class expPrint extends Exp {
  constructor(string) {
    super();
    this.string = string;
  }

  analyze(context) {
    this.string.analyze(context);
    this.type = Type.PRINT;

    if (this.string.type !== Type.STRING) {
      throw new Error(`TYPE ERROR: ${this.string} is not a string.`);
    }
  }

  toString() {
    return `(print ${this.string})`;
  }
}

module.exports = expPrint;
