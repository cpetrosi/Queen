class Exp3 {
  constructor(numlit, factorial) {
    this.numlit = numlit;
    this.factorial = factorial;
  }

  toString() {
    return `${this.numlit}${this.factorial}`;
  }
}

module.exports = Exp3;
