const Type = require('./type.js');

class typeList extends Type {
  constructor(type) {
    super();
    this.typeName = type;
  }

  toString() {
    return `${this.typeName} list`;
  }

  analyze(context) {
    this.type = Type.LIST;
  }

  optimize() {
    return this;
  }
}

module.exports = typeList;
