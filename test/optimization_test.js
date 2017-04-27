const assert = require('assert');
const parse = require('../parser');

describe('QUEEN OPTMIZATION', () => {
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
});
