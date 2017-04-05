//  const error = require('../error'); --> make this
const Context = require('./context.js');

class Program {
  constructor(FunDecls) {
    this.FunDecls = FunDecls;
  }

  toString() {
    return `Program (${this.FunDecls})`;
  }

  analyze() {
    this.FunDecls.forEach(s => s.analyze(context.INITIAL_CONTEXT));
  }
}

module.exports = Program;
