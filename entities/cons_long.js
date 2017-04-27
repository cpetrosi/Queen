const Cons = require('./cons.js');
const Context = require('./context.js');
const Type = require('./type.js');

class consLong extends Cons {
  constructor(e, rest) {
    super();
    this.e = e;
    this.rest = rest;
  }

  toString() {
    return `${this.e} cons ${this.rest}`;
  }

  analyze(context) {
    this.type = Type.CONS;
    let elementType = Type.FLOAT;

    if (context.hasBeenDeclared(this.e)) {
      const val = context.getValue(this.e);
      elementType = val.type;
    } else if (isNaN(this.e)) {
      throw new Error(`😡 UNDECLARED VARIABLE: ${this.e} has not been declared.`);
    }

    if (!elementType.isNumeric) {
      throw new Error(`😡 TYPE ERROR: ${this.e} must be numeric.`);
    }

    this.rest.analyze(context);
  }

  optimize() {
    this.rest = this.rest.optimize();
    return this;
  }
}

module.exports = consLong;
