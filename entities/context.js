class Context {
  constructor({ parent, inFunDecl }) {
    this.parent = parent;
    this.inFunDecl = inFunDecl;
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
    // js objects have prototypes :/ so must create null object instead of
    // using an empty dict.
  }

  declare(id, type) {
    // add to local variables
  }
}

Context.INITIAL_CONTEXT = new Context({
  parent: null,
  inFunDecl: false,
});

module.exports = Context;
