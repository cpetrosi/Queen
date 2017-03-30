class Funcall {
  constructor(id, args) {
    this.id = id;
    this.args = args;
  }

  analyze(context) {
    // id must exist
    // number of args must be correct
    // type of args must be correct
    const funct = context.lookup(this.id);
  }

  toString() {
    return `${this.funId}${this.argument}`;
  }
}

module.exports = Funcall;
