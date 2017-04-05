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
    newContext.declare(this.id, this.exp);

    if (this.exp.type.cannotBeAssignedToAVariable()) {
      throw new Error(`VARIABLE DECLARARTION ERROR: ${this.exp} cannot be assigned to a variable.`);
    }

    this.rest.analyze(newContext);
    this.type = this.rest.type;
  }
}

module.exports = letLet;
