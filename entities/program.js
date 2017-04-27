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
    this.FunDecls.forEach(s => s.analyze(Context.INITIAL_CONTEXT));
  }

  optimize() {
    this.FunDecls.forEach(s => s.optimize());
    return this;
  }
}

module.exports = Program;
