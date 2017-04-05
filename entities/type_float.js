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
}

module.exports = typeFloat;
