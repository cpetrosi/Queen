class ListElements {
  constructor(body, rest) {
    this.body = body;
    this.rest = rest;
  }

  toString() {
    return `${this.body}, ${this.rest}`;
  }
}

module.exports = ListElements;
