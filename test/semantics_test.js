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
});
