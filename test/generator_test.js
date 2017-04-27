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
      const expected = 'function v_5 (v_4) {((if ((v_4).length === (([])).length && list1[0] === list2[0]) { ((return (((5.0))));)} else { ((return (((6.0))));)}))};';
      assert.equal(console.string, expected);
  });
  it('👑 float nums (x: int) 🚀 match x with 🍭 [0] -> 0 🍭 [1] -> 1 🍭 🕳 -> 3', () => {
      const program = parse('👑 float nums (x: int) 🚀 match x with 🍭 [0] -> 0 🍭 [1] -> 1 🍭 🕳 -> 3');
      program.gen();
      const expected = 'function v_6 (v_4) {((if ((v_4).length === (([0])).length && list1[0] === list2[0]) { ((return (((0))));)} else if ((v_4).length === (([1])).length && list1[0] === list2[0]) { ((return (((1))));)} else { ((return (((3))));)}))};';
      assert.equal(console.string, expected);
  });
  it('👑 float fib (x: int) 🚀 match x with 🍭 0 -> 0 🍭 1 -> 1 🍭 🕳 -> (let a  🚀 x - 1 in let b  🚀 x - 2 in let z 🚀 fib (a) in let y 🚀 fib (b) in y + z)', () => {
      const program = parse('👑 float fib (x: int) 🚀 match x with 🍭 0 -> 0 🍭 1 -> 1 🍭 🕳 -> (let a  🚀 x - 1 in let b  🚀 x - 2 in let z 🚀 fib (a) in let y 🚀 fib (b) in y + z)');
      program.gen();
      const expected = 'function v_7 (v_4) {((if (v_4 === (0)) { ((return (((0))));)} else if (v_4 === (1)) { ((return (((1))));)} else { ((let v_8 = ((( (((v_4)))) - (((1)))))) let v_9 = ((( (((v_4)))) - (((2)))))) let v_10 = ((v_7(v_8))) let v_11 = ((v_7(v_9))) ((((return (((v_11)))) + (((v_10)))))));))}))};';
      assert.equal(console.string, expected);
  });
  it('👑 float mult (x: int) 🚀 x * x', () => {
      const program = parse('👑 float mult (x: int) 🚀 x * x');
      program.gen();
      const expected = 'function v_12 (v_4) {(((return ((((v_4)))*((v_4))));))};';
      assert.equal(console.string, expected);
  });
  it('👑 float div (x: float) 🚀 x / x', () => {
      const program = parse('👑 float div (x: float) 🚀 x / x');
      program.gen();
      const expected = 'function v_13 (v_4) {(((return ((((v_4)))/((v_4))));))};';
      assert.equal(console.string, expected);
  });
});
