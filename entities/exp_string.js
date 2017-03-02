class expString extends Exp {
  constructor(body) {
    super();
    this.body = body;
  }

  toString() {
    return `"${this.body}"`;
  }
}

module.exports = expString;
