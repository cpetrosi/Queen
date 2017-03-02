const assert = require('assert');
const parse = require('../parser');

describe('QUEEN PARSER', () => {
    it('👑 string (helloWorld: string) 🚀 🖨 "Hello World!"', () => {
        const ast = parse('👑 string (helloWorld: string) 🚀 🖨 "Hello World!"').toString();
        const expected = 'Program (Function Declaration ({helloWorld: string} (print "Hello World!")))';
        assert.equal(ast, expected);
    });
    it('👑 int (n: int) 🚀 n', () => {
        const ast = parse('👑 int (n: int) 🚀 n').toString();
        const expected = 'Program (Function Declaration ({n: int} n))';
        assert.equal(ast, expected);
    });
    it('👑 int (n: int m: int) 🚀 n + m', () => {
        const ast = parse('👑 int (n: int m: int) 🚀 n + m').toString();
        const expected = 'Program (Function Declaration ({n: int,m: int} n + m))';
        assert.equal(ast, expected);
    });
    it('👑 int (n: int m: int) 🚀 n * m', () => {
        const ast = parse('👑 int (n: int m: int) 🚀 n * m').toString();
        const expected = 'Program (Function Declaration ({n: int,m: int} n * m))';
        assert.equal(ast, expected);
    });
    it('👑 int (n: int m: int) 🚀 n / m', () => {
        const ast = parse('👑 int (n: int m: int) 🚀 n / m').toString();
        const expected = 'Program (Function Declaration ({n: int,m: int} n / m))';
        assert.equal(ast, expected);
    });
});
