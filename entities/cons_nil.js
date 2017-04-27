const Cons = require('./cons.js');
const Type = require('./type.js');

class consNil extends Cons {
  constructor() {
    super();
    this.body = 'nil';
  }

  toString() {
    return `${this.body}`;
  }

  analyze(context) {
    this.type = Type.CONS;
  }

  optimize() {
    return this;
  }

}

module.exports = consNil;
