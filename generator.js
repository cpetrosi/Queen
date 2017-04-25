const Append = require('./entities/append');
const Binding = require('./entities/binding');
const BinExpAdd = require('./entities/binexp_add');
const BinExpRel = require('./entities/binexp_rel');
const BinExpExp = require('./entities/binexp_exp');
const Body = require('./entities/body');
const Conditional = require('./entities/conditional');
const ConsNil = require('./entities/cons_nil');
const ConsShort = require('./entities/cons_short');
const ConsLong = require('./entities/cons_long');
const ExpAppend = require('./entities/exp_append');
const ExpBinExp = require('./entities/exp_binexp');
const ExpBool = require('./entities/exp_bool');
const ExpConditional = require('./entities/exp_conditional');
const ExpId = require('./entities/exp_id');
const ExpLet = require('./entities/exp_let');
const ExpMatch = require('./entities/exp_match');
const ExpNumLit = require('./entities/exp_numlit');
const ExpParens = require('./entities/exp_parens');
const ExpPrint = require('./entities/exp_print');
const ExpString = require('./entities/exp_string');
const Exp1Exp = require('./entities/exp1_exp');
const Exp1Mult = require('./entities/exp1_mult');
const Exp2 = require('./entities/exp2');
const Exp3 = require('./entities/exp3');
const Funcall = require('./entities/funcall');
const FunDecl = require('./entities/fundecl');
const LetExp = require('./entities/let_exp');
const LetLet = require('./entities/let_let');
const List = require('./entities/list');
const Match = require('./entities/match');
const MatchExp = require('./entities/matchexp');
const PatternCons = require('./entities/pattern_cons');
const PatternPattern = require('./entities/pattern_pattern');
const PatternWild = require('./entities/pattern_wild');
const Program = require('./entities/program');
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

//mary's part
Object.assign(Append.prototype, {
  gen() {
    const listOne = this.list1.gen();
    const listTwo = this.list2.gen();
    const lists = `${listOne}.concat(${listTwo})`;
    return `(${lists})`;
  },
});

Object.assign(BinExpAdd.prototype, {
  gen() {
    const exp1 = this.exp1.gen();
    const binexp = this.binexp.gen();
    const exp = `${binexp} ${this.op} ${exp1})`;
    return `(${exp})`;
  },
});

Object.assign(BinExpRel.prototype, {
  gen() {
    const exp1 = this.exp1.gen();
    const binexp = this.binexp.gen();
    const op = translateRelOp(this.op);
    return `(${binexp} ${op} ${exp1})`;
  },
});

Object.assign(BinExpExp.prototype, {
  gen() {
    const exp1 = this.exp1.gen();
    return `(${exp1})`;
  },
});

Object.assign(Body.prototype, {
  gen() {
    return `(${this.body.gen()})`;
  },
});

Object.assign(Conditional.prototype, {
  gen() {
    let string = `if (${this.Exp1}${this.ifLogical}${this.Exp2s}) {${this.Exp3}} `;

    if (this.Exp4.length !== 0) {
      string += `else if (${this.Exp4} ${this.elseIfLogical} ${this.Exp5s} ${this.elseIfLogical} {${this.Exp6}}) `;
    }
    if (this.Exp7.length !== 0) {
      string += `else {${this.Exp7}}`;
    }
    return `(${string})`;
  },
});

//carleen's part
Object.assign(ConsNil.prototype, {
  gen() {
    return '[]';
  },
});

Object.assign(ConsShort.prototype, {
  gen() {
    const e = lookup(this.e) || this.e;
    return `([${e}])`;
  },
});

Object.assign(ConsLong.prototype, {
  gen() {
    const e = declare(this.e) || this.e;
    const rest = declare(this.rest.gen());
    return `([${e}]).concat(rest)`;
  },
});

Object.assign(ExpAppend.prototype, {
  gen() {
    const body = this.body.gen();
    return `(${body})`;
  },
});

//megan's part
Object.assign(Exp1Exp.prototype, {
    gen() {
        const expOne = this.exp1.gen();
        return `(${expOne})`;
    },
});

Object.assign(Exp1Mult.prototype, {
    gen() {
        const expOne = this.exp1.gen();
        const expTwo = this.exp2.gen();
        return `(${expOne}${this.op}${expTwo})`;
    },
});

Object.assign(Exp2.prototype, {
    gen() {
        const negSign = this.negativeSign;
        const expThree = this.exp3.gen();
        return `(${negSign}${expThree})`;
    },
});

Object.assign(Exp3.prototype, {
    gen() {
        const num = this.n.gen();
        const fact = this.factorial;
        return `(${num}${fact})`;
    },
});

Object.assign(Funcall.prototype, {
    gen() {
        const funId = findInDict(this.id);
        const arguments = this.args.gen();
        return `(${funId}(${arguments}))`;
    },
});

Object.assign(LetExp.prototype, {
    gen() {
        const express = this.exp.gen();
        return `(${express})`;
    },
});
