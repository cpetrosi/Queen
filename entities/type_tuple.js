const Type = require('./type.js');

class typeTuple extends Type {
  constructor(typeOne, typeTwo) {
    super();
    this.typeOne = typeOne;
    this.typeTwo = typeTwo;
  }

  toString() {
    return `${this.typeOne} * ${this.typeTwo}`;
  }

  analyze(context) {
    this.type = Type.TUPLE;
  }

  optimize() {
    return this;
  }
}

module.exports = typeTuple;
