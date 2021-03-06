class MatchExp {
  constructor(pattern, exp) {
    this.pattern = pattern;
    this.exp = exp;
    this.isWild = false;
  }

  toString() {
    return `${this.pattern} -> ${this.exp}`;
  }

  analyze(context) {
    const newContext = context;

    this.exp.analyze(context);
    this.pattern.analyze(context);

    if (!newContext.matchToType) {
      newContext.matchToType = this.exp.type;
    }

    if (!this.exp.type.comparables.includes(newContext.matchToType.str)) {
      throw new Error('😡 TYPE ERROR: Must match to something of the same type.');
    }
    this.type = this.exp.type;
  }

  optimize() {
    if (this.pattern.body === 'any') {
      this.isWild = true;
    }
    return this;
  }
}

module.exports = MatchExp;
