const assert = require('assert');
const parse = require('../parser');
require('../generator');

describe('QUEEN GENERATOR', () => {
  it('👑 string helloWorld 🚀 🖨 "Hello World!"', () => {
      const program = parse('👑 string helloWorld 🚀 🖨 "Hello World!"');
      const js = program.gen();
      const expected = 'function v_1 () {(console.log("Hello World!");)};';
      assert.equal(console.string, expected);
  });
  it('👑 int num (n: int) 🚀 n', () => {
      const program = parse('👑 int num (n: int) 🚀 n');
      const js = program.gen();
      const expected = 'function v_3 (v_2) {(((return (((v_2))));))};';
      assert.equal(console.string, expected);
  });
});
