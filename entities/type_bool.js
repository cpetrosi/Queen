const Type = require('./type.js');

class typeBool extends Type {
  constructor(type) {
    super();
    this.typeName = type;
  }

  toString() {
    return `${this.typeName}`;
  }

  analyze(context) {
    this.type = Type.BOOL;
  }
}

module.exports = typeBool;
