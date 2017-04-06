const Context = require('./context.js');

class FunDecl {
  constructor(type, id, bindings, body) {
    this.bindings = bindings;
    this.body = body;
    this.id = id;
    this.returnType = type;
  }

  analyze(context) {
    context.declare(this.id, this);
    const innerContext = new Context();
    innerContext.parent = context;

    this.parameters = [];
    this.paramTypes = [];

    for (let i = 0; i < this.bindings.length; i += 1) {
      const b = this.bindings[i];
      b.analyze(context);
      this.parameters.push(b.id);
      this.paramTypes.push(b.Type);
      innerContext.declare(b.id, b);
    }

    this.body.analyze(innerContext);
    this.type = this.body.type;

    if (this.type.canBeComparedTo(this.returnType)) {
      throw Error(`TYPE ERROR: Function was expected to evaluate to type ${this.returnType}.`);
    }
  }

  toString() {
    let string = 'Function Declaration (';
    if (this.bindings.length !== 0) {
      string += `{${this.bindings}} `;
    }
    string += `${this.body})`;
    return string;
  }
}

module.exports = FunDecl;
