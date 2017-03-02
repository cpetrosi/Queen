const assert = require('assert');
const parse = require('../parser');

describe('QUEEN PARSER', () => {
    it('👑 string (helloWorld : string) 🚀 🖨 "Hello World!"', () => {
        const ast = parse('👑 string (helloWorld : string) 🚀 🖨 "Hello World!"').toString();
        const expected = 'Program (Function Declaration ({helloWorld : string} (print "Hello World!")))';
        assert.equal(ast, expected);
    });
});
