const Context = require('./context.js');

class Match {
  constructor(id, matchexp) {
    this.id = id;
    this.matchexp = matchexp;
  }

  toString() {
    return `match ${this.id} with ${this.matchexp}`;
  }

  analyze(context) {
    if (!context.hasBeenDeclared(this.id)) {
      throw new Error(`UNDECLARED VARIABLE: ${this.id} has not been declared.`);
    }

    const val = context.getValue(this.id);
    val.analyze(context);

    const newContext = new Context();
    newContext.parent = context;

    this.matchexp.forEach((m) => {
      m.analyze(newContext);
      this.type = m.type;
    });
  }
}

module.exports = Match;
