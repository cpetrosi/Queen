class List {
  constructor(first, rest) {
    this.first = first;
    this.rest = rest;
  }

  toString() {
    let string = `[${this.first}`;
    if (this.rest.length !== 0) {
      string += `${this.rest}`;
    }
    string += ']';
    return string;
  }
}

module.exports = List;
