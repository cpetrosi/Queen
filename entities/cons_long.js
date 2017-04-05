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
    return `(${this.id} cons ${this.rest}.join(' cons '))`;
  }

  analyze(context) {
    this.type = Type.CONS;
    let elementType = Type.NUMBER;

    if (context.hasBeenDeclared(this.e)) {
      const val = context.getValue(this.e);
      val.analyze(context);
      elementType = val.type;
    } else if (isNaN(this.e)) {
      throw new Error(`UNDECLARED VARIABLE: ${this.e} has not been declared.`);
    }

    if (!elementType.isNumeric()) {
      throw new Error(`TYPE ERROR: ${this.e} must be numeric.`);
    }

    this.rest.analyze(context);
  }
}

module.exports = consLong;
