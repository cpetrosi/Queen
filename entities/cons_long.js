const Cons = require('./cons.js');
const Context = require('./context.js');
const Type = require('./type.js');

class consLong extends Cons {
  constructor(exp, rest) {
    super();
    this.exp = exp;
    this.rest = rest;
  }

  toString() {
    return `(${this.id} cons ${this.rest}.join(' cons '))`;
  }

  analyze(context) {
    let newContext = context;
    if (!context.consElementType) {
      newContext = new Context();
      newContext.consElementType = this.exp.type;
    } else if (context.consElementType !== this.exp.type) {
        throw new Error('TYPE ERROR: All cons elements must be of the same type.');
      }
    this.type = Type.CONS;
    this.rest.analyze(newContext);
  }
}

module.exports = consLong;
