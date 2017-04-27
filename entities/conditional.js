const Type = require('./type.js');

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

  analyze(context) {
    this.type = Type.CONDITIONAL;
    this.Exp1.analyze(context); // if condition
    this.Exp2s.analyze(context);
    this.Exp3.analyze(context);

    this.Exp4.analyze(context); // else if condition
    this.Exp5s.analyze(context);
    this.Exp6.analyze(context);

    this.Exp7.analyze(context);

    if (!this.Exp1.type.isBoolean() || !this.Exp4.type.isBoolean()) {
      throw new Error('😡 TYPE ERROR: Condition must be a boolean.');
    }
  }

  toString() {
    let string = `if (${this.Exp1}${this.ifLogical}${this.Exp2s}) then ${this.Exp3} `;
    if (this.Exp4.length !== 0) {
      string += `elseif (${this.Exp4} ${this.elseIfLogical} ${this.Exp5s} ${this.elseIfLogical} then ${this.Exp6}) `;
    }
    if (this.Exp7.length !== 0) {
      string += `else ${this.Exp7}`;
    }
    return string;
  }

  optimize() {
    return this;
  }
}

module.exports = Conditional;
