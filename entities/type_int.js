const Type = require('./type.js');

class typeInt extends Type {
  constructor(type) {
    super();
    this.type = type;
  }

  toString() {
    return `${this.type}`;
  }
}

module.exports = typeInt;
