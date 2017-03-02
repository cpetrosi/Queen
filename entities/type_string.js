const Type = require('./type.js');

class typeString extends Type {
  constructor(type) {
    super();
    this.type = type;
  }

  toString() {
    return `${this.type}`;
  }
}

module.exports = typeString;
