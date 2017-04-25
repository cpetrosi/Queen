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
      const expected = 'Program (Function Declaration ({n: int} n))';
      assert.equal(console.string, expected);
  });
});
