const Pattern = require('./pattern.js');
const Type = require('./type.js');

class patternWild extends Pattern {
  constructor() {
    super();
    this.body = 'any';
  }

  toString() {
    return `${this.body}`;
  }

  analyze(context) {
    this.type = Type.PATTERN;
  }

  optimize() {
    return this;
  }
}

module.exports = patternWild;
