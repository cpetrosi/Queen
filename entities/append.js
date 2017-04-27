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

    if (!this.list1.listType.comparables.includes(this.list2.listType.str)) {
      throw new Error('😡 TYPE ERROR: Both lists must contain elements of the same type.');
    }
  }

  optimize() {
    this.list1.optimize();
    this.list2.optimize();
    return this;
  }
}

module.exports = Append;
