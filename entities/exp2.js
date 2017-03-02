class Exp2 {
  constructor(negativeSign, exp3) {
    this.negativeSign = negativeSign;
    this.exp3 = exp3;
  }

  toString() {
    return `${this.negativeSign}${this.exp3}`;
  }
}

module.exports = Exp2;
