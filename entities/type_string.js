const Type = require('./type.js');

class typeString extends Type {
  constructor(type) {
    super();
    this.typeName = type;
  }

  toString() {
    return `${this.typeName}`;
  }

  analyze(context) {
    this.type = Type.STRING;
  }

  optimize() {
    return this;
  }
}

module.exports = typeString;
