const Append = require('./entities/append');
const Binding = require('./entities/binding');
const BinExpAdd = require('./entities/binexp_add');
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

const ohm = require('ohm-js');
const fs = require('fs');

const grammar = ohm.grammar(fs.readFileSync('./syntax.ohm'));

const semantics = grammar.createSemantics().addOperation('ast', {
  Program(FunDecls) { return new Program(FunDecls.ast()); },
  FunDecl(crown, type, left, bindings, right, rocket, body) {
      return new FunDecl(bindings.ast(), body.ast());
  },
  Binding(id, colon, type) { return new Binding(id.sourceString, type.ast()); },
  Body(exp) { return new Body(exp.ast()); },
  Exp_append(append) { return new ExpAppend(append.ast()); },
  Exp_binexp(binexp) { return new ExpBinExp(binexp.ast()); },
  Exp_bool(bool) { return new ExpBool(bool.sourceString); },
  Exp_conditional(conditional) { return new ExpConditional(conditional.ast()); },
  Exp_id(id) { return new ExpId(id.sourceString); },
  Exp_let(exp) { return new ExpLet(exp.ast()); },
  Exp_match(exp) { return new ExpMatch(exp.ast()); },
  Exp_numlit(numlit) { return new ExpNumLit(numlit.sourceString); },
  Exp_parens(right, exp, left) { return new ExpParens(exp.ast()); },
  Exp_print(printer, string) { return new ExpPrint(string.sourceString); },
  Exp_string(string) { return new ExpString(string.sourceString); },
  Pattern_cons(cons) { return new PatternCons(cons.sourceString); },
  Pattern_wild(blackHole) { return new PatternWild(blackHole.sourceString); },
  Pattern_pattern(left, first, colon, rest, right) {
      return new PatternPattern(first.sourceString, rest.sourceString);
  },
  Cons_long(id, lightning, rest) { return new ConsLong(id.sourceString, rest.ast()); },
  Cons_short(id, lightning, empty) { return new ConsShort(id.sourceString); },
  Cons_nil(nil) { return new ConsNil(nil.ast()); },
  Funcall(id, left, params, commas, right) {
      return new Funcall(id.sourceString, params.sourceString);
  },
  List(left, first, comma, rest, right) {
    return new List(first.sourceString, rest.sourceString);
  },
  Match(match, id, _, exps) { return new Match(id.sourceString, exps.ast()); },
  MatchExp(pop, pattern, arrow, exp) { return new MatchExp(pattern.ast(), exp.ast()); },
  Let_let(let1, id, rocket, exp, _, initializer) {
      return new LetLet(id.sourceString, exp.ast(), initializer.ast());
  },
  Let_exp(exp) { return new LetExp(exp.ast()); },
  Append(listOne, at, listTwo) { return new Append(listOne.ast(), listTwo.ast()); },
  Binexp_add(exp1, addop, binexp) {
      return new BinExpAdd(exp1.ast(), addop.sourceString, binexp.ast());
  },
  Binexp_exp(exp1) { return new BinExpExp(exp1.ast()); },
  Exp1_mult(exp1, op, exp2) {
      return new Exp1Mult(exp1.ast(), op.sourceString, exp2.ast());
  },
  Exp1_exp(exp) { return new Exp1Exp(exp.ast()); },
  Exp2(negative, exp) { return new Exp2(negative.sourceString, exp.ast()); },
  Exp3(num, factorial) { return new Exp3(num.sourceString, factorial.sourceString); },
  Conditional(i, Exp1, ifLogical, Exp2s, then1, ExpThree, elseif, Exp4, elseIfLogical, Exp5s,
      then2, Exp6, e, Exp7) {
      return new Conditional(Exp1.ast(), ifLogical.ast(), Exp2s.ast(), ExpThree.ast(), Exp4.ast(),
        elseIfLogical.ast(), Exp5s.ast(), Exp6.ast(), Exp7.ast());
  },
  Type_list(type, list) { return new TypeList(type.ast()); },
  Type_tuple(type1, start, type2) { return new TypeTuple(type1.ast(), type2.ast()); },
  Type_bool(bool) { return new TypeBool(bool.sourceString); },
  Type_int(int) { return new TypeInt(int.sourceString); },
  Type_float(float) { return new TypeFloat(float.sourceString); },
  Type_string(string) { return new TypeString(string.sourceString); },
});

function parse(text) {
    const match = grammar.match(text);
    return semantics(match).ast();
}
module.exports = parse;
