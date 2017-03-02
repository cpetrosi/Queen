class Program {
  constructor(FunDecl) {
    this.FunDecl = FunDecl;
  }

  toString() {
    "Program (${this.FunDecl}.join(' '))";
  }
}

module.exports = Program;
