// const Match = require('./entities/match');
// const MatchExp = require('./entities/matchexp');
// const PatternCons = require('./entities/pattern_cons');
// const PatternPattern = require('./entities/pattern_pattern');
// const PatternWild = require('./entities/pattern_wild');

Object.assign(Program.prototype, {
  gen() {
    this.FunDecls.forEach(funDecl => funDecl.gen());
  },
});

function declare(varName) {
  return 'v';
}

function getParams(bindings) {
  if (!bindings[0]) {
    return '()';
  }

  let params = '(';
  let nextId = '';

  for (let i = 0; i < bindings[0].length - 1; i += 1) {
    nextId = declare(bindings[0][i].id);
    params += (`${nextId}, `);
  }

  nextId = declare(bindings[0][bindings.length - 1].id);
  params += `${nextId})`;
  return params;
}

// Object.assign(FunDecl.prototype, {
//   gen() {
//     const params = getParams(this.bindings);
//     const id = declare(this.id);
//     console.log(`function ${id} ${params} {${this.body.gen()}}`);
//   },
// });

Object.assign(Match.prototype, {
  gen() {
    const id = declare(this.id);
    const matchExp = declare(this.matchexp);
    //if type and length match return the body
    //can be a number, stirng, or variable name in the list
    const idLen = id.length;
    const matchLen = matchExp.length;


    const match = `match ${this.id} with ${this.matchexp}`


    return `(${
        if (idLen == matchLen) {
            if ()
        }

    })`;
  },
});

Object.assign(MatchExp.prototype, {
  gen() {
    const
    const
    return ``;
  },
});

Object.assign(PatternCons.prototype, {
  gen() {
    const
    const
    return ``;
  },
});

Object.assign(PatternPattern.prototype, {
  gen() {
    const
    const
    return ``;
  },
});
Object.assign(PatternWild.prototype, {
  gen() {
    return 'else {}';
  },
});
