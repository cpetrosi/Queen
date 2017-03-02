class patternCons extends Pattern {
  constructor(body) {
    super();
    this.body = body;
  }

  toString() {
    return `${this.body}`;
  }
}

module.exports = patternCons;
