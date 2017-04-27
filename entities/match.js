const Context = require('./context.js');

class Match {
  constructor(id, matchexp) {
    this.id = id;
    this.matchexp = matchexp;
  }

  toString() {
    let matchexps = '';

    for (let i = 0; i < this.matchexp.length; i += 1) {
      if (i === this.matchexp.length - 1) {
        matchexps += `${this.matchexp[i]}`;
      } else {
        matchexps += `${this.matchexp[i]}, `;
      }
    }
    return `match ${this.id} with ${matchexps}`;
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
      this.matchexp[i].optimize();
      if (afterWild) {
        this.matchexp.splice(i, 1);
      } else {
        afterWild = this.matchexp[i].isWild;
      }
    }
    return this;
  }
}

module.exports = Match;
