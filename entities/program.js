//  const error = require('../error'); --> make this
const Context = require('./context.js');

class Program {
  constructor(FunDecls) {
    this.FunDecls = FunDecls;
  }

  analyze() {
    this.FunDecls.forEach(s => s.analyze(context.INITIAL_CONTEXT));
  }

  toString() {
    return `Program (${this.FunDecls})`;
  }
}

module.exports = Program;
