const Type = require('./type.js');

class typeList extends Type {
  constructor(type) {
    super();
    this.type = type;
  }

  toString() {
    return `${this.type} list`;
  }
}

module.exports = typeList;
