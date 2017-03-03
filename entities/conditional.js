class Conditional {
  constructor(Exp1, ifLogical, Exp2s, Exp3, Exp4, elseIfLogical, Exp5s, Exp6, Exp7) {
    this.Exp1 = Exp1;
    this.ifLogical = ifLogical;
    this.Exp2s = Exp2s;
    this.Exp3 = Exp3;
    this.Exp4 = Exp4;
    this.elseIfLogical = elseIfLogical;
    this.Exp5s = Exp5s;
    this.Exp6 = Exp6;
    this.Exp7 = Exp7;
  }

  toString() {
    let string = `if (${this.Exp1}${this.ifLogical}${this.Exp2s}) then ${this.Exp3} `;
    if (this.Exp4.length !== 0) {
      string += (typeof this.Exp4);
      string += `elseif (${this.Exp4} ${this.elseIfLogical} ${this.Exp5s} ${this.elseIfLogical} then ${this.Exp6}) `;
    }
    if (this.Exp7.length !== 0) {
      string += `else ${this.Exp7}`;
    }
    return string;
  }
}

module.exports = Conditional;
