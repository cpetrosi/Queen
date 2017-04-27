const Type = require('./type.js');

class Exp3 {
  constructor(n, factorial) {
    this.n = n;
    this.factorial = factorial;
  }

  toString() {
    return `${this.n}${this.factorial}`;
  }

  analyze(context) {
    this.type = Type.FLOAT;

    if (context.hasBeenDeclared(this.n) && isNaN(this.n)) {
      const val = context.getValue(this.n);
      this.type = val.type;
    } else if (isNaN(this.n)) {
      throw new Error(`😡 UNDECLARED VARIABLE: ${this.n} has not been declared.`);
    }

    if (!this.type.isNumeric) {
      throw new Error(`😡 TYPE ERROR: ${this.n} must be numeric.`);
    }
  }

  optimize() {
    return this;
  }
}

module.exports = Exp3;
