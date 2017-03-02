const Cons = require('./cons.js');

class consLong extends Cons {
  constructor(id, rest) {
    super();
    this.id = id;
    this.rest = rest;
  }

  toString() {
    return `(${this.id} cons ${this.rest}.join(' cons '))`;
  }
}

module.exports = consLong;
