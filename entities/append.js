class Append {
  constructor(list1, list2) {
    this.list1 = list1;
    this.list2 = list2;
  }

  toString() {
    return `${this.list1}@${this.list2}`;
  }
}

module.exports = Append;
