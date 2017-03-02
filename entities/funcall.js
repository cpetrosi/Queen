class Funcall {
  constructor(funId, argument) {
    this.funId = funId;
    this.argument = argument;
  }

  toString() {
    return `${this.funId}(${this.argument}.join(, ))`;
  }
}

module.exports = Funcall;
