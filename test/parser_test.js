const assert = require('assert');
const parse = require('../parser');

describe('QUEEN PARSER', () => {
  it('👑 string helloWorld (helloWorld: string) 🚀 🖨 "Hello World!"', () => {
      const ast = parse('👑 string helloWorld (helloWorld: string) 🚀 🖨 "Hello World!"').toString();
      const expected = 'Program (Function Declaration ({helloWorld: string} (print "Hello World!")))';
      assert.equal(ast, expected);
  });
  it('👑 int n (n: int) 🚀 n', () => {
      const ast = parse('👑 int n (n: int) 🚀 n').toString();
      const expected = 'Program (Function Declaration ({n: int} n))';
      assert.equal(ast, expected);
  });
  it('👑 int nM (n: int m: int) 🚀 n + m + 5 + 4', () => {
      const ast = parse('👑 int nM (n: int m: int) 🚀 n + m + 5 + 4').toString();
      const expected = 'Program (Function Declaration ({n: int,m: int} (((n + m) + 5) + 4)))';
      assert.equal(ast, expected);
  });
  it('👑 int mult (n: int m: int) 🚀 n * m * 38 * 2', () => {
      const ast = parse('👑 int mult (n: int m: int) 🚀 n * m * 38 * 2').toString();
      const expected = 'Program (Function Declaration ({n: int,m: int} (((n * m) * 38) * 2)))';
      assert.equal(ast, expected);
  });
  it('👑 int div (n: int m: int) 🚀 n / m / 4', () => {
      const ast = parse('👑 int div (n: int m: int) 🚀 n / m / 4').toString();
      const expected = 'Program (Function Declaration ({n: int,m: int} ((n / m) / 4)))';
      assert.equal(ast, expected);
  });
  it('👑 int xIsFive (x: int) 🚀 let x 🚀 5', () => {
      const ast = parse('👑 int xIsFive (x : int) 🚀 let x 🚀 5').toString();
      const expected = 'Program (Function Declaration ({x: int} let x = 5))';
      assert.equal(ast, expected);
  });
  it('👑 int xInY (x: int) 🚀 let x 🚀 5 in y', () => {
      const ast = parse('👑 int xInY (x : int) 🚀 let x 🚀 5 in y').toString();
      const expected = 'Program (Function Declaration ({x: int} let x = 5 in y))';
      assert.equal(ast, expected);
  });
  it('👑 int xInYInZ (x: int) 🚀 let x 🚀 5 in let y 🚀 10 in z', () => {
      const ast = parse('👑 int xInYInZ (x : int) 🚀 let x 🚀 5 in let y 🚀 10 in z').toString();
      const expected = 'Program (Function Declaration ({x: int} let x = 5 in let y = 10 in z))';
      assert.equal(ast, expected);
  });
  it('👑 float m (x: float) 🚀 match x with 🍭 [] -> 5.0 🍭 🕳 -> 6.0', () => {
      const ast = parse('👑 float m (x: float) 🚀 match x with 🍭 [] -> 5.0 🍭 🕳 -> 6.0').toString();
      const expected = 'Program (Function Declaration ({x: float} match x with [] -> 5.0,any -> 6.0))';
      assert.equal(ast, expected);
  });
  it('👑 bool b (odd : int) 🚀 match odd with 🍭 [] -> true 🍭 hd ⚡️ tl -> false', () => {
      const ast = parse('👑 bool b (odd : int) 🚀 match odd with 🍭 [] -> true 🍭 hd ⚡️ tl -> false').toString();
      const expected = 'Program (Function Declaration ({odd: int} match odd with [] -> true,hd ⚡️ tl -> false))';
      assert.equal(ast, expected);
  });
      it('👑 bool wild (x: int) 🚀 let x 🚀 5 in match x with 🍭 🕳 -> true 🍭 🕳 -> false', () => {
      const ast = parse('👑 bool wild (x: int) 🚀 let x 🚀 5 in match x with 🍭 🕳 -> true 🍭 🕳 -> false').toString();
      const expected = 'Program (Function Declaration ({x: int} let x = 5 in match x with any -> true,any -> false))';
      assert.equal(ast, expected);
  });
  it('👑 int minus (x: int y: int) 🚀 x - y', () => {
      const ast = parse('👑 int minus (x: int y: int) 🚀 x - y').toString();
      const expected = 'Program (Function Declaration ({x: int,y: int} (x - y)))';
      assert.equal(ast, expected);
  });
  it('👑 int plus (x: int y: int) 🚀 x + y', () => {
      const ast = parse('👑 int plus (x: int y: int) 🚀 x + y').toString();
      const expected = 'Program (Function Declaration ({x: int,y: int} (x + y)))';
      assert.equal(ast, expected);
  });
  it('👑 int * int tup (x: int) 🚀 [6] @ [9]', () => {
      const ast = parse('👑 int * int tup (x: int) 🚀 [6] @ [9]').toString();
      const expected = 'Program (Function Declaration ({x: int} [6]@[9]))';
      assert.equal(ast, expected);
  });
  it('👑 int plus (x: int y: int) 🚀 x + y 👑 int * int tup (x: int) 🚀 [6] @ [9]', () => {
      const ast = parse('👑 int plus (x: int y: int) 🚀 x - y 👑 int * int tup (x: int) 🚀 [6] @ [9]').toString();
      const expected = 'Program (Function Declaration ({x: int,y: int} (x - y)),Function Declaration ({x: int} [6]@[9]))';
      assert.equal(ast, expected);
  });
  it('👑 bool consMe (odd : int list) 🚀 match odd with 🍭 [] -> true 🍭 3 ⚡️ tl -> false', () => {
    const ast = parse('👑 bool consMe (odd : int list) 🚀 match odd with 🍭 [] -> true 🍭 3 ⚡️ tl -> false').toString();
    const expected = 'Program (Function Declaration ({odd: int list} match odd with [] -> true,3 ⚡️ tl -> false))';
    assert.equal(ast, expected);
  });
  it('👑 int plus (x: int y: int) 🚀 x + y 👑 int * int tup (x: int) 🚀 [6] @ [9]', () => {
      const ast = parse('👑 int plus (x: int y: int) 🚀 x - y 👑 int * int tup (x: int) 🚀 [6] @ [9, 765, 5]').toString();
      const expected = 'Program (Function Declaration ({x: int,y: int} (x - y)),Function Declaration ({x: int} [6]@[9, 765, 5]))';
      assert.equal(ast, expected);
  });
  it('👑 int plus (x: int y: int) 🚀 x + y 👑 int * int tup (x: int) 🚀 [6] @ [9]', () => {
      const ast = parse('👑 int plus (x: int y: int) 🚀 x - y 👑 int * int tup (x: int) 🚀 [6, 4] @ [9]').toString();
      const expected = 'Program (Function Declaration ({x: int,y: int} (x - y)),Function Declaration ({x: int} [6, 4]@[9]))';
      assert.equal(ast, expected);
  });
});
