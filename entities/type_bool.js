const Type = require('./type.js');

class typeBool extends Type {
  constructor(typeName) {
    super();
    this.typeName = typeName;
  }

  toString() {
    return `${this.typeName}`;
  }

  analyze(context) {
    this.type = Type.BOOL;
  }

  optimize() {
    return this;
  }
}

module.exports = typeBool;
