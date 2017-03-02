const Type = require('./type.js');

class typeFloat extends Type {
  constructor(type) {
    super();
    this.type = type;
  }

  toString() {
    return `${this.type}`;
  }
}

module.exports = typeFloat;
