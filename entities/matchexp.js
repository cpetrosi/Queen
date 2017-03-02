class MatchExp {
  constructor(pattern, exp) {
    this.pattern = pattern;
    this.exp = exp;
  }

  toString() {
    return `${this.pattern} -> ${this.exp}`;
  }
}

module.exports = MatchExp;
