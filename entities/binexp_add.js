const BinExp = require('./binexp.js');
const Type = require('./type.js');
const Exp3 = require('./exp3.js');

class binexpAdd extends BinExp {
  constructor(binexp, addop, exp1) {
    super();
    this.exp1 = exp1;
    this.binexp = binexp;
    this.op = addop;
  }

  toString() {
    return `(${this.binexp} ${this.op} ${this.exp1})`;
  }

  analyze(context) {
    this.binexp.analyze(context);
    this.exp1.analyze(context);
    this.type = Type.FLOAT;

    if (!this.binexp.type.isNumeric || !this.exp1.type.isNumeric) {
      throw new Error('😡 TYPE ERROR: Only numeric types can be added and subtracted.');
    }
  }

  optimize() {
    this.binexp = this.binexp.optimize();
    this.exp1 = this.exp1.optimize();

    let exp = this.binexp;
    while (exp.exp1) {
      exp = exp.exp1;
    }

    if (!isNaN(exp.toString()) && !isNaN(this.exp1.exp1.toString())) {
      const first = Number(exp.toString());
      const second = Number(this.exp1.exp1.toString());
      const compiledNumber = (this.op === '+' ? first + second : first - second);
      return new Exp3(`${compiledNumber}`, '');
    }

    if (this.exp1.exp1.toString() === '0') {
      return this.binexp;
    }
    return this;
  }
}

module.exports = binexpAdd;
