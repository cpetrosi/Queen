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

Object.assign(Match.prototype, {
  gen() {
    const id = this.id.gen();
    const matchExp = this.matchexp.gen();
    //if type and length match return the body
    //can be a number, stirng, or variable name in the list
    const idLen = id.length.gen();
    const matchLen = matchExp.length.gen();
    // const match = `match ${this.id} with ${this.matchexp}`
    return `(${
        if (idLen == matchLen) {
            //Figure this out below |
            if (id.TYPE == numLit) {
                if (matchExp == variable || matchExp == id) {
                    return this.body
                }
            }
            if (idLen.type == string) {

            }
            if (idLen.type == variable) {

            }
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
//find out what goes in these brackets
    return 'else {}';
  },
});

Object.assign(ExpBool.prototype, {
  gen() {
    const body = this.body.gen();
    return `${body})`;
  },
});

//function to test
// it'👑 bool consMe (odd : int list) 🚀 match odd with 🍭 [] -> true 🍭 3 ⚡️ tl -> false', () => {
//   const ast = parse('👑 bool consMe (odd : int list) 🚀 match odd with 🍭 [] -> true 🍭 3 ⚡️ tl -> false').toString();
//   const expected =
//   const expected = 'Program (Function Declaration ({odd: int list} match odd with nil -> true,3 cons tl -> false))';
//   assert.equal(ast, expected);
