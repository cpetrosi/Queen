const Context = require('./context.js');

class FunDecl {
  constructor(/* type,*/ id, bindings, body) {
    this.bindings = bindings;
    this.body = body;
    this.id = id;
  //  this.type = type;
  }

  analyze() {
    context.declare(this.id, this); // should the type of our function be its "return type"???
    const innerContext = new Context({ parent: context, inFunDecl: true });
    this.bindings.forEach(b => innerContext.declare(b.id, b));
    this.body.analyze(innerContext);
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
