const Let = require('./let.js');
const Context = require('./context.js');

class letLet extends Let {
  constructor(id, exp, rest) {
    super();
    this.id = id;
    this.exp = exp;
    this.rest = rest;
  }

  toString() {
    if (`${this.rest}`) {
      return `let ${this.id} = ${this.exp} in ${this.rest}`;
    }
    return `let ${this.id} = ${this.exp}`;
  }

  analyze(context) {
    const newContext = new Context();
    newContext.parent = context;
    this.exp.analyze(newContext);
    this.type = this.exp.type;
    newContext.declare(this.id, this.exp);

    if (this.type.cannotBeAssigned) {
      throw new Error(`😡 VARIABLE DECLARARTION ERROR: ${this.exp} cannot be assigned to a variable.`);
    }

    for (let i = 0; i < this.rest.length; i += 1) {
      this.rest[i].analyze(newContext);
      this.type = this.rest[i].type;
    }
  }
}

module.exports = letLet;
