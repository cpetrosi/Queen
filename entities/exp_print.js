class expPrint extends Exp {
  constructor(string) {
    super();
    this.string = string;
  }

  toString() {
    return `(print ${this.string})`;
  }
}

module.exports = expPrint;
