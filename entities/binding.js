class Binding {
  constructor(id, typeName) {
    this.id = id;
    this.typeName = typeName;
  }

  toString() {
    let string = `${this.id}: `;
    string += `${this.typeName}`;
    return string;
  }

  analyze(context) {
    this.typeName.analyze(context);
    this.type = this.typeName.type;
  }

  optimize() {
   return this;
  }
}

module.exports = Binding;
