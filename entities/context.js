class Context {
  constructor() {
    this.parent = null;
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

  declare(id, obj) {
    this.localVariables.id = obj;
  }

  getValue(id) {
    if (id in this.localVariables) {
      return this.localVariables.id;
    }
    if (this.parent) {
      return this.parent.getValue(id);
    }
    return null;
  }

}

Context.INITIAL_CONTEXT = new Context();

module.exports = Context;
