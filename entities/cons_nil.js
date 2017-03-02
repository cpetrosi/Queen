const Cons = require('./cons.js');

class consNil extends Cons {
  constructor() {
    super();
    this.body = 'nil';
  }

  toString() {
    return `${this.body}`;
  }
}

module.exports = consNil;
