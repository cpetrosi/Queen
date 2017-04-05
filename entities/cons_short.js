const Cons = require('./cons.js');
const Type = require('./type.js');

class consShort extends Cons {
  constructor(exp) {
    super();
    this.exp = exp;
  }

  toString() {
    return `(${this.exp} cons nil)`;
  }

  analyze(context) {
    this.type = Type.CONS;
    if (context.consElementType && context.consElementType !== this.exp.type) {
        throw new Error('TYPE ERROR: All cons elements must be of the same type.');
      }
  }
}

module.exports = consShort;
