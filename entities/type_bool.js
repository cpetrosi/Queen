const Type = require('./type.js');

class typeBool extends Type {
  constructor(type) {
    super();
    this.type = type;
  }

  toString() {
    return `${this.type}`;
  }
}

module.exports = typeBool;
