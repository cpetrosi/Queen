const Append = require('./entities/append');
const Binding = require('./entities/binding');
const BinExpAdd = require('./entities/binexp_add');
const BinExpExp = require('./entities/binexp_exp');
const Body = require('./entities/body');
const Conditional = require('./entities/conditional');
const Cons = require('./entities/cons');
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
const Let = require('./entities/let');
const LetLet = require('./entities/let_let');
const LetExp = require('./entities/let_exp');
const List = require('./entities/list');
const ListElements = require('./entities/listelements');
const Match = require('./entities/match');
const MatchExp = require('./entities/matchexp')
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

const semantics = aelGrammar.createSemantics().addOperation('ast', {
  Program(FunDecls) { return new Program(FunDecls.ast()); },
  FunDecl(crown, type, left, bindings, right, rocket, body) {
      return new FunDecl(bindings.ast(), body.ast());
  },
  Binding(id, colon, type) { return new Binding(id.ast(), type.ast()); },
  Body(arg) { return new Body(arg.ast()); },
  Exp_append(body) { return new ExpAppend(body.ast()); },
  Exp_binexp(body) { return new ExpBinExp(body.ast()); },
  Exp_bool(body) { return new ExpBool(body.ast()); },
  Exp_conditional(body) { return new ExpConditional(body.ast()); },
  Exp_id(body) { return new ExpId(body.ast()); },
  Exp_let(body) { return new ExpLet(body.ast()); },
  Exp_match(body) { return new ExpMatch(body.ast()); },
  Exp_numlit(body) { return new ExpNumLit(body.ast()); },
  Exp_parens(right, body, left) { return new ExpParens(body.ast()); },
  Exp_print(printer, string) { return new ExpPrint(string.ast()); },
  Exp_string(body) { return new ExpString(body.ast()); },
  Pattern_cons(cons) { return new PatternCons(cons.sourceString); },
  Pattern_wild(blackHole) { return new PatternWild(blackHole.sourceString); },
  Pattern_pattern(left, first, colon, rest, right) {
      return new PatternPattern(first.ast(), rest.ast());
  },
  Cons_long(id, lightning, rest) { return new consLong(id.ast(), rest.ast()); },
  Cons_short(id, lightning, empty) { return new consShort(id.ast()); },
  Cons_nil(nil) { return new consNil(nil.ast()); },
  Funcall(id, left, params, commas, right) {
      return new Funcall(id.sourceString, params.sourceString);
  },
  List(left, elements, right) { return new List(elements.ast()); },
  ListElements(first, commas, rest) {
      return new ListElements(first.sourceString, rest.sourceString);
  },
  Match(match, id, _, exps) { return new Match(id.sourceString, exps.ast()); },
  MatchExp(pop, pattern, arrow, exp) { return new MatchExp(pattern.ast(), exp.ast()); },
  Let_let(let1, id, rocket, exp, _, let2) {
      return new LetLet(id.sourceString, exp.ast(), let2.ast());
  },
  Let_exp(exp) { return new LetExp(exp.ast()); },
  Append(listOne, at, listTwo) { return new Append(listOne.ast(), listTwo.ast()); },
  BinExp_add(exp1, addop, binexp) {
      return new BinExpAdd(exp1.ast(), addop.sourceString, binexp.ast());
  },
  BinExp_exp(exp1) { return new BinExpExp(exp1.ast()); },
  Exp1_mult(exp1, op, exp2) {
      return new Exp1Mult(exp1.ast().op.sourceString, exp2.ast());
  },
  Exp1_exp(exp) { return new Exp1Exp(exp.ast()); },
  Exp2(negative, exp) { return new Exp2(negative.sourceString, exp.ast()); },
  Exp3(num, factorial) { return new Exp3(num.sourceString, factorial.sourceString); },
  Conditional(i, Exp1, ifLogical, Exp2s, then1, Exp3, elseif, Exp4, elseIfLogical, Exp5s,
      then2, Exp6, e, Exp7) {
      return new Conditional(Exp1.ast(), ifLogical.ast(), Exp2s.ast(), Exp3.ast(), Exp4.ast(),
        elseIfLogical.ast(), Exp5s.ast(), Exp6.ast(), Exp7.ast());
  },
  Type_list(type, list) { return new TypeList(type.ast()); },
  Type_tuple(type1, start, type2) { return new TypeTuple(type1.ast(), type2.ast()); },
  Type_bool(bool) { return new TypeBool(bool.sourceString); },
  Type_int(int) { return new TypeInt(int.sourceString); },
  Type_float(float) { return new TypeFloat(float.sourceString); },
  Type_string(string) { return new TypeString(string.sourceString); }
});
