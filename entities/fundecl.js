class FunDecl {
  constructor(bindings, body) {
    this.bindings = bindings;
    this.body = body;
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
