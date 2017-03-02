const Pattern = require('./pattern.js');

class patternWild extends Pattern {
  constructor() {
    super();
    this.body = 'any';
  }

  toString() {
    return `${this.body}`;
  }
}

module.exports = patternWild;
