const Type = require('./type.js');

class Append {
  constructor(list1, list2) {
    this.list1 = list1;
    this.list2 = list2;
  }

  toString() {
    return `${this.list1}@${this.list2}`;
  }

  analyze(context) {
    this.list1.analyze(context);
    this.list2.analyze(context);
    this.type = Type.LIST;

    if (this.list1.listType !== this.list2.listType) {
      throw new Error('TYPE ERROR: Both lists must contain elements of the same type.');
    }
  }
}

module.exports = Append;
