const Exp1 = require('./exp1.js');
const Type = require('./type.js');
const Exp3 = require('./exp3.js');

class exp1Mult extends Exp1 {
  constructor(exp1, op, exp2) {
    super();
    this.exp1 = exp1;
    this.exp2 = exp2;
    this.op = op;
  }

  toString() {
    return `(${this.exp1} ${this.op} ${this.exp2})`;
  }

  analyze(context) {
    this.exp1.analyze(context);
    this.exp2.analyze(context);
    this.type = Type.FLOAT;

    if (!this.exp1.type.isNumeric || !this.exp2.type.isNumeric) {
      throw new Error('😡 TYPE ERROR: Only numeric types can be multiplied and divided.');
    }
  }

  optimize() {
    this.exp1 = this.exp1.optimize();
    this.exp2 = this.exp2.optimize();

    if (!isNaN(this.exp2.toString()) && !isNaN(this.exp1.exp1.toString())) {
      const second = Number(this.exp2.toString());
      const first = Number(this.exp1.exp1.toString());
      const compiledNumber = (this.op === '*' ? first * second : first / second);
      return new Exp3(`${compiledNumber}`, '');
    }

    if (this.exp1.exp1.toString() === '0') {
      return new Exp3('0', '');
    }
    return this;
  }
}

module.exports = exp1Mult;
