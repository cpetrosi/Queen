const Exp = require('./exp.js');

class expId extends Exp {
  constructor(id) {
    super();
    this.id = id;
  }

  // anaylze.. if id has not been declared throw err
  //context.hasBeenDecalred(id)

  toString() {
    return `${this.id}`;
  }
}

module.exports = expId;
