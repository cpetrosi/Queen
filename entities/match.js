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
      throw new Error(`😡 UNDECLARED VARIABLE: ${this.id} has not been declared.`);
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

  optimize() {
    let afterWild = false;

    for (let i = 0; i < this.matchexp.length; i += 1) {
      if (afterWild) {
        this.matchexp[i] = null;
      }
      afterWild = this.matchexp[i].isWild;
    }
    this.matchexp.map(s => s.optimize()).filter(s => s !== null);
    return this;
  }
}

module.exports = Match;
