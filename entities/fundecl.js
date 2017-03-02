class FunDecl {
  constructor(bindings, body) {
    this.bindings = bindings;
    this.body = body;
  }

  toString() {
    return `Function Declaration ({${this.bindings}} ${this.body})`;
  }
}

module.exports = FunDecl;
