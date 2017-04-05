class MatchExp {
  constructor(pattern, exp) {
    this.pattern = pattern;
    this.exp = exp;
  }

  toString() {
    return `${this.pattern} -> ${this.exp}`;
  }

  analyze(context) {
    const newContext = context;

    for (let i = 0; i < this.pattern.length; i += 1) {
      this.exp[i].analyze(context);
      this.pattern[i].analyze(context);

      if (!context.matchToType) {
        newContext.matchToType = this.exp[i].type;
      }

      if (this.exp[i].type !== newContext.matchToType) {
        throw new Error('TYPE ERROR: Must match to something of the same type.');
      }
    }
    this.type = newContext.matchToType;
  }
}

module.exports = MatchExp;
