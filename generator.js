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
const ExpFunCall = require('./entities/exp_funcall');
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

// mary's part
const variableMap = new Map();

const declare = (() => {
  let lastId = 0;
  return (v) => {
    if (!(variableMap.has(v))) {
      variableMap.set(v, ++lastId); // eslint-disable-line no-plusplus
    }
    return `v_${variableMap.get(v)}`;
  };
})();

function lookup(id) {
  if (!(variableMap.has(id))) {
    return null;
  }
  return `v_${variableMap.get(id)}`;
}

function translateRelOp(op) {
  const relOpDict = {
    '==': '===',
    '!=': '!==',
  };

  return relOpDict[op] || op;
}

Object.assign(Program.prototype, {
  gen() {
    this.FunDecls.forEach(funDecl => funDecl.gen());
  },
});

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

  nextId = declare(bindings[0][bindings[0].length - 1].id);
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
    let exp1 = this.exp1.gen();
    exp1 = exp1.replace(';', '');
    let binexp = this.binexp.gen();
    binexp = binexp.replace(';', '');

    // OPTIMIZATION: adding or subtracting zero has no effect
    if (exp1 === 0) {
      return `(${binexp});`;
    }
    const exp = `${binexp} ${this.op} ${exp1})`;
    return `(${exp});`;
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
    return `(return ${exp1});`;
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

// carleen's part
Object.assign(ConsNil.prototype, {
  gen() {
    return '([])';
  },
});

Object.assign(ConsShort.prototype, {
  gen() {
    const e = lookup(this.e) || this.e;
    return `(${e})`;
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
    return `(return ${body});`;
  },
});

// jordan's part
Object.assign(Program.prototype, {
  gen() {
    this.FunDecls.forEach(funDecl => funDecl.gen());
  },
});

Object.assign(FunDecl.prototype, {
  gen() {
    const params = getParams(this.bindings);
    const id = declare(this.id);
    console.string = `function ${id} ${params} {${this.body.gen()}};`;
    console.log(`function ${id} ${params} {${this.body.gen()}};`);
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
    return `(return ${id});`;
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
    const str = lookup(this.string) || this.string;
    return `console.log(${str});`;
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
    const first = lookup(this.first) || this.first;
    items = `[${first}`;

    if (this.rest) {
      this.rest.forEach((item) => {
        const check = lookup(item);
        if (check) {
          items += `, ${check}`;
        } else {
          items += `, ${item}`;
        }
      });
    }

    items += ']';

    return `(${items})`;
  },
});

Object.assign(LetLet.prototype, {
  gen() {
    const id = declare(this.id);
    let exp = this.exp.gen();
    let rest = this.rest[0].gen();
    rest = rest.replace(';', '');
    exp = exp.replace('return', '');
    exp = exp.replace(';', '');

    return `let ${id} = ${exp} ${rest};`;
  },
});

Object.assign(ExpBinExp.prototype, {
  gen() {
    const body = this.body.gen();
    return `(${body})`;
  },
});

Object.assign(ExpFunCall.prototype, {
  gen() {
    const body = this.body.gen();
    return `(${body})`;
  },
});

// megan's part
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
        const num = lookup(this.n) || this.n;
        const fact = this.factorial;
        return `(${num}${fact})`;
    },
});

Object.assign(Funcall.prototype, {
    gen() {
        const funId = lookup(this.id);
        let args = [];
        this.args.forEach((arg) => {
          args.push(lookup(arg));
        });
        args = args.join(',');
        return `(${funId}(${args}))`;
    },
});

Object.assign(LetExp.prototype, {
    gen() {
        const express = this.exp.gen();
        return `(${express})`;
    },
});

// mackenzie's part
Object.assign(MatchExp.prototype, {
  gen() {
  },
});

Object.assign(PatternCons.prototype, {
  gen() {
    return `${this.body.gen()}`;
  },
});

Object.assign(PatternPattern.prototype, {
  gen() {
    let items;
    const first = lookup(this.e) || this.e;
    items = `[${first}`;

    if (this.rest) {
      this.rest.forEach((item) => {
        const check = lookup(item);
        if (check) {
          items += `, ${check}`;
        } else {
          items += `, ${item}`;
        }
      });
    }

    items += ']';

    return `(${items})`;
  },
});

Object.assign(PatternWild.prototype, {
  gen() {
    this.isWild = true;
  },
});

Object.assign(ExpBool.prototype, {
  gen() {
    const body = this.body.gen();
    return `(${body})`;
  },
});

function makeMatchIfs(matchWith, matchTo) {
  let ifs = '';

  if (matchTo.startsWith('([')) {
    ifs += `(${matchWith}).length === (${matchTo}).length`;

    const list1 = matchWith.split(',');
    const list2 = matchTo.split(',');

    for (let i = 0; i < list1.length; i += 1) {
      const e1 = list1[i];
      const e2 = list2[i];

      // ALlows patterns to have undefined variables.
      ifs += ` && (${e1}[${i}] === ${e2}[${i}] || typeof ${e2}[${i}] === "undefined")`;
    }
  } else {
    ifs += `${matchWith} === ${matchTo}`;
  }

  return ifs;
}

Object.assign(Match.prototype, {
  gen() {
    const matchWith = lookup(this.id);
    let ifStatement = '';
    this.matchexp[0].gen();

    if (this.matchexp[0].pattern.isWild) {
      // OPTIMIZATION: if the first pattern is wild, dont even put it in an 'if'
      return this.matchexp[0].exp.gen();
    }
    for (let i = 0; i < this.matchexp.length; i += 1) {
      const currCase = this.matchexp[i];
      currCase.pattern.gen();

      if (currCase.pattern.isWild) {
        ifStatement += ` else { ${currCase.exp.gen()}}`;
        // OPTIMIZATION: all cases after a wild are not added to the code
        return ifStatement;
      } else if (ifStatement.length === 0) {
        const ifs = makeMatchIfs(matchWith, currCase.pattern.gen());
        ifStatement += `if (${ifs}) { ${currCase.exp.gen()}}`;
      } else {
        const ifs = makeMatchIfs(matchWith, currCase.pattern.gen());
        ifStatement += ` else if (${ifs}) { ${currCase.exp.gen()}}`;
      }
    }

    return ifStatement;
  },
});
