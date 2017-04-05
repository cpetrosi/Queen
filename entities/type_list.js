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
    // if statements to see the type of elelemnt
  }
}

module.exports = typeList;
