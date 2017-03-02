class Conditional {
  constructor(Exp1, ifLogical, Exp2s, Exp3, Exp4, elseIfLogical, Exp5s, Exp6, Exp7) {
    super();
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
      let string = `if (${this.exp1} ${this.ifLogical} ${exp2s}.join(`${this.ifLogical}`)) then ${this.Exp3} `
      string += `elseif (${this.Exp4} ${this.elseIfLogical} ${this.Exp5s}.join(`${this.elseIfLogical}`) then ${this.Exp6}) `;
      if (this.Exp7 != null) {
          string += `else ${this.Exp7}`
      }
    return string;
  }
}

module.exports = Conditional;
