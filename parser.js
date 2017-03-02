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
const Exp1 = require('./entities/Exp1');
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
  Append(listOne, at, listTwo) {return new Append(listOne.ast(), listTwo.ast());},
  Binding(id, colon, type) {return new Binding(id.ast(), type.ast());},
  BinExp_add(exp1, addop, binexp) {return new binExpAdd(exp1.ast(), addop.sourceString, binexp.ast());},
  BinExp_exp(exp1) {return new binExpExp(exp1.ast());},
  Body(arg) {return new Body(arg.ast());},
  Conditional(Exp1, ifLogical, Exp2s, Exp3, Exp4, elseIfLogical, Exp5s, Exp6, Exp7) {
      return new Conditional(Exp1.ast(), ifLogical.ast(), Exp2s.ast(), Exp3.ast(), Exp4.ast(), elseIfLogical.ast(), Exp5s.ast(), Exp6.ast(), Exp7.ast());
  },
  Cons_long(id, lightning, rest) {return new consLong(id.ast(), rest.ast());},
  Cons_short(id, lightning, empty) {return new consShort(id.ast());},
  Cons_nil(nil) {return new consNil(nil.ast());},
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

});
