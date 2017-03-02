class List {
  constructor(listElements) {
    this.listElements = listElements;
  }

  toString() {
    return `[${this.listElements}]`;
  }
}

module.exports = List;
