const assert = require('assert');
const parse = require('../parser');

describe('QUEEN OPTMIZATION', () => {
  it('👑 float m (x: float) 🚀 match x with 🍭 🕳 -> 5.0 🍭 [] -> 6.0', () => {
      const program = parse('👑 float m (x: float) 🚀 match x with 🍭 [] -> 5.0 🍭 🕳 -> 6.0').optimize();
      const ast = parse('👑 float m (x: float) 🚀 match x with 🍭 [] -> 5.0 🍭 🕳 -> 6.0').toString();
      const expected = 'Program (Function Declaration ({x: float} match x with nil -> 5.0,any -> 6.0))';
      assert.equal(ast, expected);
  });
      it('👑 bool wild (x: int) 🚀 let x 🚀 5 in match x with 🍭 🕳 -> true 🍭 🕳 -> false', () => {
      const ast = parse('👑 bool wild (x: int) 🚀 let x 🚀 5 in match x with 🍭 🕳 -> true 🍭 🕳 -> false').toString();
      const expected = 'Program (Function Declaration ({x: int} let x = 5 in match x with any -> true,any -> false))';
      assert.equal(ast, expected);
  });
});
