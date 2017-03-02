const Append = require('./entities/Append');
const Binding = require('./entities/Binding');
const BinExp = require('./entities/BinExp');
const Body = require('./entities/Body');
const Conditional = require('./entities/Conditional');
const Cons = require('./entities/Cons');
const ExpAppend = require('./entities/ExpAppend');
const ExpBinExp = require('./entities/ExpBinExp');
const ExpBool = require('./entities/ExpBool');
const ExpConditional = require('./entities/ExpConditional');
const ExpId = require('./entities/ExpId');
const ExpLet = require('./entities/ExpLet');
const ExpMatch = require('./entities/ExpMatch');
const ExpNumLit = require('./entities/NumLit');
const ExpParens = require('./entities/ExpParens');
const ExpPrint = require('./entities/ExpPrint');
const ExpString = require('./entities/ExpString');
const Exp1 = require('./entities/Exp1');
const Exp2 = require('./entities/Exp2');
const Exp3 = require('./entities/Exp3');
const Funcall = require('./entities/FunCall');
const FunDecl = require('./entities/FunDecl');
const Let = require('./entities/Let');
const List = require('./entities/List');
const ListElements = require('./entities/ListElements');
const Match = require('./entities/Match');
const Pattern = require('./entities/Pattern');
const PatternCons = require('./entities/PatternCons');
const PatternPattern = require('./entities/PatternPattern');
const PatternWild = require('./entities/PatternWild');
const Program = require('./entities/Program');
const TypeBool = require('./entities/TypeBool');
const TypeFloat = require('./entities/TypeFloat');
const TypeInt = require('./entities/TypeInt');
const TypeList = require('./entities/TypeList');
const TypeString = require('./entities/TypeString');
const TypeTuple = require('./entities/TypeTuple');

const ohm = require 'ohm-js'
const fs = require 'fs'

const grammar = ohm.grammar(fs.readFileSync './syntax.ohm')





const semantics = aelGrammar.createSemantics().addOperation('ast', {

  Append(listOne, at, listTwo) {return new Append(listOne.ast(), listTwo.ast());},

});
