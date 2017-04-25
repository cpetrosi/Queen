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
  it('👑 bool wild 🚀 let x 🚀 5 in match x with 🍭 🕳 -> true 🍭 🕳 -> false', () => {
    const func = () => {
      parse('👑 bool wild 🚀 let x 🚀 5 in match x with 🍭 🕳 -> true 🍭 🕳 -> false').analyze();
    };
    assert.doesNotThrow(func);
  });
  it('👑 int mult 🚀 let m 🚀 2 in let n 🚀 4 in n * m * 38 * 2', () => {
    const func = () => {
      parse('👑 int mult 🚀 let m 🚀 2 in let n 🚀 4 in n * m * 38 * 2').analyze();
    };
    assert.doesNotThrow(func);
  });
  it('👑 int mult 🚀 let m 🚀 false in let n 🚀 4 in n * m * 38 * 2', () => {
    const func = () => {
      parse('👑 int mult 🚀 let m 🚀 false in let n 🚀 4 in n * m * 38 * 2').analyze();
    };
    assert.throws(func, Error, 'TYPE ERROR: m must be numeric.');
  });
  it('👑 int list tup 🚀 ([6] @ [9])', () => {
    const func = () => {
      parse('👑 int list tup 🚀 ([6] @ [9])').analyze();
    };
    assert.doesNotThrow(func);
  });
  it('👑 int mult 🚀 let m 🚀 2 in let n 🚀 4 in (n * m! * 38 * 2)', () => {
    const func = () => {
      parse('👑 int mult 🚀 let m 🚀 2 in let n 🚀 4 in (n * m! * 38 * 2)').analyze();
    };
    assert.doesNotThrow(func);
  });
  it('👑 int mult 🚀 let m 🚀 2 in let n 🚀 4 in (n * -m * 38 * 2)', () => {
    const func = () => {
      parse('👑 int mult 🚀 let m 🚀 2 in let n 🚀 4 in (n * -m * 38 * 2)').analyze();
    };
    assert.doesNotThrow(func);
  });
  it('👑 bool compare 🚀 1 == 2', () => {
    const func = () => {
      parse('👑 bool compare 🚀 1 == 2').analyze();
    };
    assert.doesNotThrow(func);
  });
  it('👑 bool compare 🚀 1 > "apple"', () => {
    const func = () => {
      parse('👑 bool compare 🚀 1 > "apple"').analyze();
    };
    assert.throws(func, Error, 'TYPE ERROR');
  });
  it('👑 bool compare 🚀 let m 🚀 false in 1 == m', () => {
    const func = () => {
      parse('👑 bool compare 🚀 let m 🚀 false in 1 == m').analyze();
    };
    assert.throws(func, Error, 'TYPE ERROR: m must be numeric.');
  });
  it('👑 int compare 🚀 let m 🚀 2 in 1 == m', () => {
    const func = () => {
      parse('👑 int compare 🚀 let m 🚀 2 in 1 == m').analyze();
    };
    assert.throws(func, Error, 'TYPE ERROR: Function was expected to evaluate to type int.');
  });
  it('👑 string me 🚀 "s"', () => {
    const func = () => {
      parse('👑 string me 🚀 "s"').analyze();
    };
    assert.doesNotThrow(func);
  });
  it('👑 bool longMatch 🚀 let odd 🚀 5 in match odd with 🍭 [] -> true 🍭 3 ⚡️ tl -> false 🍭 3 ⚡️ tl -> "hi" 🍭 3 ⚡️ tl -> false', () => {
    const func = () => {
      parse('👑 bool longMatch 🚀 let odd 🚀 5 in match odd with 🍭 [] -> true 🍭 3 ⚡️ tl -> false 🍭 3 ⚡️ tl -> "hi" 🍭 3 ⚡️ tl -> false').analyze();
    };
    assert.throws(func, Error, 'TYPE ERROR: Must match to something of the same type.');
  });
  it('👑 int me (m : int) 🚀 m + 1', () => {
    const func = () => {
      parse('👑 int me (m : int) 🚀 m + 1').analyze();
    };
    assert.doesNotThrow(func);
  });
  it('👑 int me (m : string) 🚀 m + 1', () => {
    const func = () => {
      parse('👑 int me (m : string) 🚀 m + 1').analyze();
    };
    assert.throws(func, Error, 'TYPE ERROR: m must be numeric.');
  });
  it('👑 int me (m : int n : int) 🚀 m + n', () => {
    const func = () => {
      parse('👑 int me (m : int n: int) 🚀 m + n').analyze();
    };
    parse('👑 int me (m : int n: int) 🚀 m + n').analyze();
    assert.doesNotThrow(func);
  });
  it('👑 int me (m : string n : int) 🚀 m + n', () => {
    const func = () => {
      parse('👑 int me (m : string n: int) 🚀 m + n').analyze();
    };
    assert.throws(func, Error, '😡 TYPE ERROR: m must be numeric.');
  });
  it('👑 string list test 🚀 [apple]@[orange]', () => {
    const func = () => {
      parse('👑 string list test 🚀 ["apple"]@["orange"]').analyze();
    };
    parse('👑 string list test 🚀 ["apple"]@["orange"]').analyze();
    assert.doesNotThrow(func);
  });
  it('👑 int me (m : int n : int) 🚀 m - n', () => {
    const func = () => {
      parse('👑 int me (m : int n: int) 🚀 m - n').analyze();
    };
    parse('👑 int me (m : int n: int) 🚀 m - n').analyze();
    assert.doesNotThrow(func);
  });
  it('👑 int me (m : int n : int) 🚀 m * n', () => {
    const func = () => {
      parse('👑 int me (m : int n: int) 🚀 m * n').analyze();
    };
    parse('👑 int me (m : int n: int) 🚀 m * n').analyze();
    assert.doesNotThrow(func);
  });
  it('👑 float me (m : float n : float) 🚀 m / n', () => {
    const func = () => {
      parse('👑 float me (m : float n: float) 🚀 m / n').analyze();
    };
    parse('👑 float me (m : float n: float) 🚀 m / n').analyze();
    assert.doesNotThrow(func);
  });
});
