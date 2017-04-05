const Type = require('./type.js');

class typeBool extends Type {
  constructor(type) {
    super();
    this.type = type;
  }

  toString() {
    return `${this.type}`;
  }

  analyze(context) {
    this.type = Type.BOOL;
  }
}

module.exports = typeBool;
