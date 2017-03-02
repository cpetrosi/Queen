const Cons = require('./cons.js');

class consShort extends Cons {
  constructor(id) {
    super();
    this.id = id;
  }

  toString() {
    return `(${this.id} cons nil)`;
  }
}

module.exports = consShort;
