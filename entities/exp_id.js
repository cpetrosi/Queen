const Exp = require('./exp.js');

class expId extends Exp {
  constructor(id) {
    super();
    this.id = id;
  }

  // anaylze.. if id has not been declared throw err
  // context.hasBeenDecalred(id)
  analyze(context) {
    if (context.hasBeenDeclared(this.id)) {
      this.id.analyze(context);
    } else {
      // throw error
    }
  }

  toString() {
    return `${this.id}`;
  }
}

module.exports = expId;
