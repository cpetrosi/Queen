const Context = require('./context.js');

class FunDecl {
  constructor(type, id, bindings, body) {
    this.bindings = bindings;
    this.body = body;
    this.id = id;
    this.returnType = type;
  }

  analyze(context) {
    this.returnType.analyze(context);
    this.returnType = this.returnType.type;

    const innerContext = new Context();
    innerContext.parent = context;
    innerContext.declare(this.id, this);

    this.parameters = [];
    this.paramTypes = [];

    if (this.bindings.length > 0) {
      for (let i = 0; i < this.bindings[0].length; i += 1) {
        const b = this.bindings[0][i];
        b.analyze(context);
        this.parameters.push(b.id);
        this.paramTypes.push(b.type);
        innerContext.declare(b.id, b);
      }
    }

    this.body.analyze(innerContext);
    this.type = this.body.type;

    if (!this.type.comparables.includes(this.returnType.str)) {
      throw new Error(`TYPE ERROR: Function was expected to evaluate to type ${this.returnType.str}.`);
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
