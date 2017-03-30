const Exp = require('./exp.js');

class expPrint extends Exp {
  constructor(string) {
    super();
    this.string = string;
  }
  // string must be of type string!!!!

  analyze(context) {
    if (this.string.type !== Type.STRING) {
      // throw error
    } else {
      this.string.analyze(context);
    }
  }

  toString() {
    return `(print ${this.string})`;
  }
}

module.exports = expPrint;
