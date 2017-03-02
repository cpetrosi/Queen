class Binding {
  constructor(id, type) {
    this.id = id;
    this.type = type;
  }

  toString() {
    return `${this.id} : ${this.type}`;
  }
}

module.exports = Binding;
