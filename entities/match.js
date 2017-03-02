class Match {
  constructor(id, matchexp) {
    this.id = id;
    this.matchexp = matchexp;
  }

  toString() {
    return `match ${this.id} with ${this.matchexp}.join(' ')`;
  }
}

module.exports = Match;
