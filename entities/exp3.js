const Type = require('./type.js');

class Exp3 {
  constructor(n, factorial) {
    this.n = n;
    this.factorial = factorial;
  }

  toString() {
    return `${this.numlit}${this.factorial}`;
  }

  analyze(context) {
    this.type = Type.NUMBER;

    if (context.hasBeenDeclared(this.n)) {
      const val = context.getValue(this.n);
      val.analyze(context);
      this.type = val.type;
    } else if (isNaN(this.n)) {
      throw new Error(`UNDECLARED VARIABLE: ${this.n} has not been declared.`);
    }

    if (this.type !== Type.NUMBER) {
      throw new Error(`TYPE ERROR: ${this.n} must be numeric.`);
    }
  }
}

module.exports = Exp3;
