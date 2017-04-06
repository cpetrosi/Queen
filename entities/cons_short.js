const Cons = require('./cons.js');
const Type = require('./type.js');

class consShort extends Cons {
  constructor(e) {
    super();
    this.e = e;
  }

  toString() {
    return `${this.e}`;
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

    if (!elementType.isNumeric) {
      throw new Error(`TYPE ERROR: ${this.e} must be numeric.`);
    }
  }
}

module.exports = consShort;
