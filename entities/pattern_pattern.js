const Pattern = require('./pattern.js');

class patternPattern extends Pattern {
  constructor(patternElement, rest) {
    super();
    this.patternElement = patternElement;
    this.rest = rest;
  }

  toString() {
    return `[${this.pattern}, ${this.rest}.join(', ')]`;
  }
}

module.exports = patternPattern;
