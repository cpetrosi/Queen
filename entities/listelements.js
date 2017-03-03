class ListElements {
  constructor(first, next) {
    this.first = first;
    this.next = next;
  }

  toString() {
    return `${this.first}${this.next}`;
  }
}

module.exports = ListElements;
