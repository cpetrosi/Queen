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
    assert.doesNotThrow(func);
  });
  it('👑 int n 🚀 let s 🚀 5 in 1 + s', () => {
    const func = () => {
      parse('👑 int n 🚀 let s 🚀 5 in 1 + s').analyze();
    };
    parse('👑 int n 🚀 let s 🚀 5 in 1 + s').analyze();
    assert.doesNotThrow(func);
  });
});
