const Context = require('./context.js');
const Type = require('./type.js');

class List {
  constructor(first, rest) {
    this.first = first;
    this.rest = rest;
  }

  toString() {
    let string = `[${this.first}`;
    if (this.rest.length !== 0) {
      string += `${this.rest}`;
    }
    string += ']';
    return string;
  }

  analyze(context) {
    this.type = Type.LIST;
    this.first.analyze(context);


    let newContext = context;
    if (!context.listType) {
      newContext = new Context();
      newContext.parent = context;
      newContext.listType = this.first.type;
    }

    if (this.first.type !== context.listType) {
      throw new Error('TYPE ERROR: List elements must all be of the same type.');
    }

    this.rest.analyze(newContext);
  }
}

module.exports = List;
