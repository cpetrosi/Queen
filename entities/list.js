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
    } else if (context.hasBeenDeclared(this.first)) {
      this.listType = context.getValue(this.first).type;
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
      if (this.rest[i] === 'true' || this.rest[i] === 'false') {
        this.listType = Type.BOOL;
      } else if (this.rest[i].charAt(0) === '"' && this.rest[i].charAt(this.rest[i].length - 1) === '"') {
        this.listType = Type.STRING;
      } else if (context.hasBeenDeclared(this.rest[i])) {
        this.listType = context.getValue(this.rest[i]).type;
      } else if (isNaN(this.rest[i])) {
        this.rest[i].analyze(context);
        this.listType = this.rest[i].type;
      } else {
        this.listType = Type.FLOAT;
      }

      this.listType = this.rest[i].type;
      if (!this.listType.comparables.includes(newContext.listType.str)) {
        throw new Error('TYPE ERROR: List elements must all be of the same type.');
      }
    }
  }
}

module.exports = List;
