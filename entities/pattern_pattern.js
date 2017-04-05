const Pattern = require('./pattern.js');
const Type = require('./type.js');

class patternPattern extends Pattern {
  constructor(patternElement, rest) {
    super();
    this.e = patternElement;
    this.rest = rest;
  }

  toString() {
    let string = `[${this.e}`;

      this.rest.forEach((e) => {
        string += `, ${e}`;
      });

      string += ']';
      return string;
  }

  analyze(context) {
    this.type = Type.PATTERN;
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

    this.rest.forEach((p) => {
      elementType = Type.NUMBER;

      if (context.hasBeenDeclared(p)) {
        const val = context.getValue(p);
        val.analyze(context);
        elementType = val.type;
      } else if (isNaN(p)) {
        throw new Error(`UNDECLARED VARIABLE: ${p} has not been declared.`);
      }

      if (!elementType.isNumeric()) {
        throw new Error(`TYPE ERROR: ${p} must be numeric.`);
      }
    });
  }
}

module.exports = patternPattern;
