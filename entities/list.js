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
    this.listType = null;

    if (this.first === 'true' || this.first === 'false') {
      this.listType = Type.BOOL;
    } else if (this.first.charAt(0) === '"' && this.first.charAt(this.first.length - 1) === '"') {
      this.listType = Type.STRING;
    } else if (isNaN(this.first)) {
      this.first.analyze(context);
      this.listType = this.first.type;
    } else {
      this.listType = Type.FLOAT;
    }

    let newContext = context;
    if (!newContext.listType) {
      newContext = new Context();
      newContext.parent = context;
      newContext.listType = this.listType;
    }

    for (let i = 0; i < this.rest.length; i += 1) {
      this.rest[i].analyze(newContext);
      this.listType = this.rest[i].type;
      if (this.listType.canBeComparedTo(newContext.listType)) {
        throw new Error('TYPE ERROR: List elements must all be of the same type.');
      }
    }
  }
}

module.exports = List;
