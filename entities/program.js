class Program {
  constructor(FunDecl) {
    this.FunDecl = FunDecl;
  }

  toString() {
    return `Program (${this.FunDecl}.join(' '))`;
  }
}

module.exports = Program;
