// Mary
const Append = require('./entities/append');
const Binding = require('./entities/binding');
const BinExpAdd = require('./entities/binexp_add');
const BinExpRel = require('./entities/binexp_rel');
const BinExpExp = require('./entities/binexp_exp');
const Body = require('./entities/body');
const Conditional = require('./entities/conditional');

// Carleen
const ConsNil = require('./entities/cons_nil');
const ConsShort = require('./entities/cons_short');
const ConsLong = require('./entities/cons_long');
const ExpAppend = require('./entities/exp_append');
const ExpBinExp = require('./entities/exp_binexp');
const ExpBool = require('./entities/exp_bool');

// Jordan
const ExpConditional = require('./entities/exp_conditional');
const ExpId = require('./entities/exp_id');
const ExpLet = require('./entities/exp_let');
const ExpMatch = require('./entities/exp_match');
const ExpNumLit = require('./entities/exp_numlit');
const ExpParens = require('./entities/exp_parens');
const ExpPrint = require('./entities/exp_print');
const ExpString = require('./entities/exp_string');

// Megan
const Exp1Exp = require('./entities/exp1_exp');
const Exp1Mult = require('./entities/exp1_mult');
const Exp2 = require('./entities/exp2');
const Exp3 = require('./entities/exp3');
const Funcall = require('./entities/funcall');
const FunDecl = require('./entities/fundecl');
const LetExp = require('./entities/let_exp');
const LetLet = require('./entities/let_let');
const List = require('./entities/list');

// Mackenzie
const Match = require('./entities/match');
const MatchExp = require('./entities/matchexp');
const PatternCons = require('./entities/pattern_cons');
const PatternPattern = require('./entities/pattern_pattern');
const PatternWild = require('./entities/pattern_wild');
const Program = require('./entities/program');

// no one
const TypeBool = require('./entities/type_bool');
const TypeFloat = require('./entities/type_float');
const TypeInt = require('./entities/type_int');
const TypeList = require('./entities/type_list');
const TypeString = require('./entities/type_string');
const TypeTuple = require('./entities/type_tuple');

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

Object.assign(FunDecl.prototype, {
  gen() {
    const params = getParams(this.bindings);
    const id = declare(this.id);
    console.log(`function ${id} ${params} {${this.body.gen()}}`);
  },
});

Object.assign(ExpConditional.prototype, {
  gen() {
    const body = this.body.gen();
    return `(${body})`;
  },
});

Object.assign(ExpId.prototype, {
  gen() {
    const id = this.id.gen();
    return `(${id})`;
  },
});

Object.assign(ExpLet.prototype, {
  gen() {
    const body = this.body.gen();
    return `(${body})`;
  },
});

Object.assign(ExpMatch.prototype, {
  gen() {
    const body = this.body.gen();
    return `(${body})`;
  },
});

Object.assign(ExpNumLit.prototype, {
  gen() {
    const body = this.body.gen();
    return `(${body})`;
  },
});

Object.assign(ExpParens.prototype, {
  gen() {
    const body = this.body.gen();
    return `(${body})`;
  },
});

Object.assign(ExpPrint.prototype, {
  gen() {
    const str = this.string.gen();
    return `console.log(${str})`;
  },
});

Object.assign(ExpString.prototype, {
  gen() {
    const body = this.body.gen();
    return `(${body})`;
  },
});

Object.assign(List.prototype, {
  gen() {
    let items;
    const firstCheck = findInDict(this.first);
    if (firstCheck) {
      items = `[${firstCheck}`;
    } else {
      items = `[${this.first.gen()}`;
    }

    this.rest.forEach((item) => {
      const check = findInDict(item);
      if (check) {
        items += `, ${check}`;
      } else {
        items += `, ${item.gen()}`;
      }
    });

    items += ']';

    return `(${items})`;
  },
});

Object.assign(LetLet.prototype, {
  gen() {
    const id = declare(this.id);
    let items;
    for (let i = 0; i < this.rest.length - 1; i += 1) {
      items += `${this.rest[i].gen()}; \n`;
    }
    return `let ${id} = ${this.exp.gen()}; \n${items} return ${this.rest[this.rest.length - 1].gen()}`;
  },
});

Object.assign(ExpBinExp.prototype, {
  gen() {
    const body = this.body.gen();
    return `(${body})`;
  },
});
