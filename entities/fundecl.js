class FunDecl {
  constructor(bindings, body) {
    this.bindings = bindings;
    this.body = body;
  }

  toString() {
    return `Function Declaration ((${this.bindings}.join(' ')) (${this.body}))`;
  }
}

module.exports = FunDecl;
