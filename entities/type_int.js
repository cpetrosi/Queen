const Type = require('./type.js');

class typeInt extends Type {
  constructor(type) {
    super();
    this.typeName = type;
  }

  toString() {
    return `${this.typeName}`;
  }

  analyze(context) {
    this.type = Type.INT;
  }
}

module.exports = typeInt;
