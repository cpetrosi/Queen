const Exp = require('./exp.js');

class expPrint extends Exp {
  constructor(string) {
    super();
    this.string = string;
  }
  // string must be of type string!!!!

  toString() {
    return `(print ${this.string})`;
  }
}

module.exports = expPrint;
