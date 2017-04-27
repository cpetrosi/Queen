const Type = require('./type.js');

class typeFloat extends Type {
  constructor(type) {
    super();
    this.typeName = type;
  }

  analyze() {
    this.type = Type.FLOAT;
  }

  toString() {
    return `${this.typeName}`;
  }

  optimize() {
    return this;
  }
}

module.exports = typeFloat;
