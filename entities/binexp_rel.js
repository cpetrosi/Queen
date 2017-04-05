const BinExp = require('./binexp.js');
const Type = require('./type.js');

class binexpRel extends BinExp {
  constructor(binexp, relop, exp1) {
    super();
    this.exp1 = exp1;
    this.binexp = binexp;
    this.op = relop;
  }

  toString() {
    return `(${this.binexp} ${this.op} ${this.exp1})`;
  }

  analyze(context) {
    this.binexp.analyze(context);
    this.exp1.analyze(context);
    this.type = Type.BOOL;

    if (!this.binexp.type.canBeComparedTo(this.exp1.type)) {
      throw new Error('TYPE ERROR: Incompatible types.');
    }
  }
}

module.exports = binexpRel;
