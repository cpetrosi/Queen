const assert = require('assert');
const parse = require('../parser');

describe('QUEEN OPTIMIZATION', () => {
  it('👑 float m (x: float) 🚀 match x with 🍭 🕳 -> 5.0 🍭 [] -> 6.0', () => {
      const program = parse('👑 float m (x: float) 🚀 match x with 🍭 🕳 -> 5.0 🍭 [] -> 6.0').optimize();
      const ast = program.toString();
      const expected = 'Program (Function Declaration ({x: float} match x with any -> 5.0))';
      assert.equal(ast, expected);
  });
    it('👑 bool wild (x: int) 🚀 let x 🚀 5 in match x with 🍭 🕳 -> true 🍭 🕳 -> false', () => {
      const program = parse('👑 bool wild (x: int) 🚀 let x 🚀 5 in match x with 🍭 🕳 -> true 🍭 🕳 -> false').optimize();
      const ast = program.toString();
      const expected = 'Program (Function Declaration ({x: int} let x = 5 in match x with any -> true))';
      assert.equal(ast, expected);
  });
  it('👑 int nM (n: int m: int) 🚀 n + m + 0', () => {
      const program = parse('👑 int nM (n: int m: int) 🚀 n + m + 0').optimize();
      const ast = program.toString();
      const expected = 'Program (Function Declaration ({n: int,m: int} (n + m)))';
      assert.equal(ast, expected);
  });
  it('👑 int nM (n: int m: int) 🚀 n + m - 0', () => {
      const program = parse('👑 int nM (n: int m: int) 🚀 n + m - 0').optimize();
      const ast = program.toString();
      const expected = 'Program (Function Declaration ({n: int,m: int} (n + m)))';
      assert.equal(ast, expected);
  });
  it('👑 int nM (n: int m: int) 🚀 5 + 4', () => {
      const program = parse('👑 int nM (n: int m: int) 🚀 5 + 4').optimize();
      const ast = program.toString();
      const expected = 'Program (Function Declaration ({n: int,m: int} 9))';
      assert.equal(ast, expected);
  });
  it('👑 int nM (n: int m: int) 🚀 5 + 4 + 1', () => {
      const program = parse('👑 int nM (n: int m: int) 🚀 5 + 4 + 1').optimize();
      const ast = program.toString();
      const expected = 'Program (Function Declaration ({n: int,m: int} 10))';
      assert.equal(ast, expected);
  });
  it('👑 int nM (n: int m: int) 🚀 5 + 4 + 1', () => {
      const program = parse('👑 int nM (n: int m: int) 🚀 5 + 4 - 1').optimize();
      const ast = program.toString();
      const expected = 'Program (Function Declaration ({n: int,m: int} 8))';
      assert.equal(ast, expected);
  });
  it('👑 int nM (n: int m: int) 🚀 5 * 4', () => {
      const program = parse('👑 int nM (n: int m: int) 🚀 5 * 4').optimize();
      const ast = program.toString();
      const expected = 'Program (Function Declaration ({n: int,m: int} 20))';
      assert.equal(ast, expected);
  });
  it('👑 int nM (n: int m: int) 🚀 10 / 2', () => {
      const program = parse('👑 int nM (n: int m: int) 🚀 10 / 2').optimize();
      const ast = program.toString();
      const expected = 'Program (Function Declaration ({n: int,m: int} 5))';
      assert.equal(ast, expected);
  });
  it('👑 int nM (n: int m: int) 🚀 10 / 2', () => {
      const program = parse('👑 int nM (n: int m: int) 🚀 10 / 2 * 2').optimize();
      const ast = program.toString();
      const expected = 'Program (Function Declaration ({n: int,m: int} 10))';
      assert.equal(ast, expected);
  });
});
