const Append = require('./entities/Append');
const Binding = require('./entities/Binding');
const BinExpAdd = require('./entities/binExpAdd');
const BinExpExp = require('./entities/binExpExp');
const Body = require('./entities/Body');
const Conditional = require('./entities/Conditional');
const Cons = require('./entities/Cons');
const ExpAppend = require('./entities/expAppend');
const ExpBinExp = require('./entities/expBinExp');
const ExpBool = require('./entities/expBool');
const ExpConditional = require('./entities/expConditional');
const ExpId = require('./entities/expId');
const ExpLet = require('./entities/expLet');
const ExpMatch = require('./entities/expMatch');
const ExpNumLit = require('./entities/numLit');
const ExpParens = require('./entities/expParens');
const ExpPrint = require('./entities/expPrint');
const ExpString = require('./entities/expString');
const Exp1Exp = require('./entities/exp1Exp');
const Exp1Mult = require('./entities/exp1Mult');
const Exp2 = require('./entities/Exp2');
const Exp3 = require('./entities/Exp3');
const Funcall = require('./entities/funCall');
const FunDecl = require('./entities/funDecl');
const Let = require('./entities/Let');
const List = require('./entities/List');
const ListElements = require('./entities/listElements');
const Match = require('./entities/Match');
const PatternCons = require('./entities/patternCons');
const PatternPattern = require('./entities/patternPattern');
const PatternWild = require('./entities/patternWild');
const Program = require('./entities/Program');
const TypeBool = require('./entities/typeBool');
const TypeFloat = require('./entities/typeFloat');
const TypeInt = require('./entities/typeInt');
const TypeList = require('./entities/typeList');
const TypeString = require('./entities/typeString');
const TypeTuple = require('./entities/typeTuple');

const ohm = require 'ohm-js'
const fs = require 'fs'
const grammar = ohm.grammar(fs.readFileSync './syntax.ohm')

const semantics = aelGrammar.createSemantics().addOperation('ast', {
  Program(FunDecls) {return new Program(FunDecls.ast());},
  FunDecl(crown, type, left, bindings, right, rocket, body) {
      return new FunDecl(bindings.ast(), body.ast());
  },
  Binding(id, colon, type) {return new Binding(id.ast(), type.ast());},
  Body(arg) {return new Body(arg.ast());},
  Exp_append(body) {return new expAppend(body.ast());},
  Exp_binexp(body) {return new expBinExp(body.ast());},
  Exp_bool(body) {return new expBool(body.ast());},
  Exp_conditional(body) {return new expConditional(body.ast());},
  Exp_id(body) {return new expId(body.ast());},
  Exp_let(body) {return new expId(body.ast());},
  Exp_match(body) {return new expMatch(body.ast());},
  Exp_numlit(body) {return new expNumLit(body.ast());},
  Exp_parens(right, body, left) {return new expParens(body.ast());},
  Exp_print(printer, string) {return new expPrint(string.ast());},
  Exp_string(body) {return new expString(body.ast());}
  Pattern_cons(cons) {return new patternCons(cons.sourceString);},
  Pattern_wild(blackHole) {return new patternWild(blackHole.sourceString);},
  Pattern_pattern(left, first, colon, rest, right) {
      return new patternPattern(first.ast(), rest.ast());
  }
  Cons_long(id, lightning, rest) {return new consLong(id.ast(), rest.ast());},
  Cons_short(id, lightning, empty) {return new consShort(id.ast());},
  Cons_nil(nil) {return new consNil(nil.ast());},
  Funcall(id, left, params, commas, right) {return new funCall(id.sourceString, params.sourceString);},
  List(left, elements, right) {return new List(elements.ast());},
  ListElements(first, commas, rest) {return new listElements(first.sourceString, rest.sourceString);},
  Match(match, id, with, exps) {return new Match(id.sourceString, exps.ast());},
  MatchExp(pop, pattern, arrow, exp) {return new matchExp(pattern.ast(), exp.ast());},
  Let_let(let1, id, rocket, exp, _, let2) {return new letLet(id.sourceString, exp.ast(), let2.ast());},
  Let_exp(exp) {return new letExp(exp.ast());},
  Append(listOne, at, listTwo) {return new Append(listOne.ast(), listTwo.ast());},
  BinExp_add(exp1, addop, binexp) {return new binExpAdd(exp1.ast(), addop.sourceString, binexp.ast());},
  BinExp_exp(exp1) {return new binExpExp(exp1.ast());},
  Exp1_mult(exp1, op, exp2) {
      return new exp1Mult(exp1.ast(). op.sourceString, exp2.ast());
  },
  Exp1_exp(exp) {return new exp1Exp(exp.ast());},
  Exp2(negative, exp) {return new Exp2(negative.sourceString, exp.ast());},
  Exp3(num, factorial) {return new Exp3(num.sourceString, factorial.sourceString);},
  Conditional(if, Exp1, ifLogical, Exp2s, then, Exp3, elseif, Exp4, elseIfLogical, Exp5s, then, Exp6, else, Exp7) {
      return new Conditional(Exp1.ast(), ifLogical.ast(), Exp2s.ast(), Exp3.ast(), Exp4.ast(), elseIfLogical.ast(), Exp5s.ast(), Exp6.ast(), Exp7.ast());
  },
  Type_list(type, list) {return new typeList(type.ast());},
  Type_tuple(type1, start, type2) {return new typeTuple(type1.ast(), type2.ast());},
  Type_bool(bool) {return new typeBool(bool.sourceString);},
  Type_int(int) {return new typeInt(int.sourceString);},
  Type_float(float){return new typeFloat(float.sourceString);},
  Type_string(string) {return new typeString(string.sourceString);}
});
