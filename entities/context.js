class Context {
  constructor() {
    this.parent = null;
    this.consElementType = null;
    this.listType = null;
    this.localVariables = Object.create(null);
  }

  hasBeenDeclared(id) {
    if (id in this.localVariables) {
      return true;
    }
    if (this.parent) {
      return this.parent.hasBeenDeclared(id);
    }
    return false;
  }

  declare(id, type, value) {
    this.localVariables.id = { type, value };
  }

  getValue(id) {
    if (id in this.localVariables) {
      return this.localVariables.id.value;
    }
    if (this.parent) {
      return this.parent.getValue(id);
    }
    return null;
  }

}

Context.INITIAL_CONTEXT = new Context();

module.exports = Context;
