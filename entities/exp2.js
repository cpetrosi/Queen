class Exp2 {
  constructor(negativeSign, exp3) {
    this.negativeSign = negativeSign;
    this.exp3 = exp3;
  }

  toString() {
    return `${this.negativeSign}${this.exp3}`;
  }

  analyze(context) {
    this.exp3.analyze(context);
    this.type = this.exp3.type;
    if (!this.type.isNumeric) {
      throw new Error('TYPE ERROR: Only numeric types can be negated.');
    }
  }
}

module.exports = Exp2;
