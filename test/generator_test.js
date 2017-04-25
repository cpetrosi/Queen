const assert = require('assert');
const parse = require('../parser');
require('../generator');

describe('QUEEN GENERATOR', () => {
  it('👑 string helloWorld 🚀 🖨 "Hello World!"', () => {
      const program = parse('👑 string helloWorld 🚀 🖨 "Hello World!"');
      program.gen();
      const expected = 'function v_1 () {(console.log("Hello World!");)};';
      assert.equal(console.string, expected);
  });
  it('👑 int num (n: int) 🚀 n', () => {
      const program = parse('👑 int num (n: int) 🚀 n');
      program.gen();
      const expected = 'function v_3 (v_2) {(((return (((v_2))));))};';
      assert.equal(console.string, expected);
  });
  it('👑 float m (x: float list) 🚀 match x with 🍭 [] -> 5.0 🍭 🕳 -> 6.0', () => {
      const program = parse('👑 float m (x: float list) 🚀 match x with 🍭 [] -> 5.0 🍭 🕳 -> 6.0');
      program.gen();
      const expected = 'function v_5 (v_4) {((if ((v_4).length === ([]).length && list1[0] === list2[0]) { ((return (((5.0))));)} else { ((return (((6.0))));)}))};';
      assert.equal(console.string, expected);
  });
  it('👑 float nums (x: int) 🚀 match x with 🍭 [0] -> 0 🍭 [1] -> 1 🍭 🕳 -> 3', () => {
      const program = parse('👑 float nums (x: int) 🚀 match x with 🍭 [0] -> 0 🍭 [1] -> 1 🍭 🕳 -> 3');
      program.gen();
      const expected = 'function v_6 (v_4) {((if ((v_4).length === (([0])).length && list1[0] === list2[0]) { ((return (((0))));)} else if ((v_4).length === (([1])).length && list1[0] === list2[0]) { ((return (((1))));)} else { ((return (((3))));)}))};';
      assert.equal(console.string, expected);
  });
  it('👑 float fib (x: int) 🚀 match x with 🍭 [0] -> 0 🍭 [1] -> 1 🍭 🕳 -> fib (x)', () => {
      const program = parse('👑 float fib (x: int) 🚀 match x with 🍭 [0] -> 0 🍭 [1] -> 1 🍭 🕳 -> fib (x)');
      program.gen();
      const expected = 'function v_7 (v_4) {((if ((v_4).length === (([0])).length && list1[0] === list2[0]) { ((return (((0))));)} else if ((v_4).length === (([1])).length && list1[0] === list2[0]) { ((return (((1))));)} else { ((v_7(v_4)))}))};';
      assert.equal(console.string, expected);
  });
});
