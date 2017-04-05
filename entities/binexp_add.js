const BinExp = require('./binexp.js');
const Type = require('./type.js');

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
    this.type = Type.NUMBER;

    if (!this.binexp.type.isNumeric() || !this.exp1.isNumeric()) {
      throw new Error('TYPE ERROR: Only numeric types can be added and subtracted.');
    }
  }
}

module.exports = binexpAdd;
