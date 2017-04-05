class Funcall {
  constructor(id, args) {
    this.id = id;
    this.args = args;
  }

  /* analyze(context) {
    this.args.analyze(context) // analyze the args so you know the type before
    if (context.hasBeenDeclared(this.id) && (this.args.length === context.argsLength(this.id))) {
      if (// type of args) {
      }
    }
    // id must exist
    // number of args must be correct
    // type of args must be correct
    const funct = context.lookup(this.id);
  }*/

  toString() {
    return `${this.funId}${this.argument}`;
  }
}

module.exports = Funcall;
