const assert = require('assert');
const parse = require('../parser');

describe('QUEEN SEMANTIC ANALYZER', () => {
  it('👑 string helloWorld 🚀 🖨 "Hello World!"', () => {
    const func = () => {
      parse('👑 string helloWorld 🚀 🖨 "Hello World!"').analyze();
    };
    assert.doesNotThrow(func);
  });
  it('👑 string helloWorld 🚀 🖨 H', () => {
    const func = () => {
      parse('👑 string helloWorld 🚀 🖨 H').analyze();
    };
    assert.throws(func, Error, 'UNDECLARED VARIABLE: H has not been declared.');
  });
  it('👑 int n 🚀 1 + 1', () => {
    const func = () => {
      parse('👑 int n 🚀 1 + 1').analyze();
    };
    parse('👑 int n 🚀 1 + 1').analyze();
    assert.doesNotThrow(func);
  });
  it('👑 int n 🚀 let s 🚀 5 in 1 + s', () => {
    const func = () => {
      parse('👑 int n 🚀 let s 🚀 5 in 1 + s').analyze();
    };
    parse('👑 int n 🚀 let s 🚀 5 in 1 + s').analyze();
    assert.doesNotThrow(func);
  });
  it('👑 int n 🚀 let s 🚀 "s" in 1 + s', () => {
    const func = () => {
      parse('👑 int n 🚀 let s 🚀 "s" in 1 + s').analyze();
    };
    assert.throws(func, Error, 'TYPE ERROR: s must be numeric.');
  });

  it('👑 int list tup 🚀 [6] @ [9]', () => {
    const func = () => {
      parse('👑 int list tup 🚀 [6] @ [9]').analyze();
    };
    assert.doesNotThrow(func);
  });
  it('👑 int * int tup 🚀 ["s"] @ [9]', () => {
    const func = () => {
      parse('👑 int * int tup 🚀 ["s"] @ [9]').analyze();
    };
    assert.throws(func, Error, 'TYPE ERROR: Both lists must contain elements of the same type.');
  });
  it('👑 float Floaty 🚀 let floatList 🚀 3.0', () => {
    const func = () => {
      parse('👑 float Floaty 🚀 let floatList 🚀 3.0').analyze();
    };
    assert.doesNotThrow(func);
  });
  it('👑 string Floaty 🚀 let floatList 🚀 3.0', () => {
    const func = () => {
      parse('👑 string Floaty 🚀 let floatList 🚀 3.0').analyze();
    };
    assert.throws(func, Error, 'TYPE ERROR: Function was expected to evaluate to type string.');
  });
  it('👑 bool consMe 🚀 let odd 🚀 5 in match odd with 🍭 [] -> true 🍭 3 ⚡️ tl -> false', () => {
    const func = () => {
      parse('👑 bool consMe 🚀 let odd 🚀 5 in match odd with 🍭 [] -> true 🍭 3 ⚡️ odd -> false').analyze();
    };
    assert.doesNotThrow(func);
  });
  it('👑 bool consMe 🚀 let odd 🚀 5 in match odd with 🍭 [] -> true 🍭 3 ⚡️ tl -> false', () => {
    const func = () => {
      parse('👑 bool consMe 🚀 let odd 🚀 5 in match odd with 🍭 [] -> 4 🍭 3 ⚡️ odd -> false').analyze();
    };
    assert.throws(func, Error, 'TYPE ERROR: Must match to something of the same type.');
  });
});
