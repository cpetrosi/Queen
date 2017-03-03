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
    it('👑 int (x: int) 🚀 let x 🚀 5', () => {
        const ast = parse('👑 int (x : int) 🚀 let x 🚀 5').toString();
        const expected = 'Program (Function Declaration ({x: int} let x = 5))';
        assert.equal(ast, expected);
    });
    it('👑 int (x: int) 🚀 let x 🚀 5 in y', () => {
        const ast = parse('👑 int (x : int) 🚀 let x 🚀 5 in y').toString();
        const expected = 'Program (Function Declaration ({x: int} let x = 5 in y))';
        assert.equal(ast, expected);
    });
    it('👑 int (x: int) 🚀 let x 🚀 5 in let y 🚀 10 in z', () => {
        const ast = parse('👑 int (x : int) 🚀 let x 🚀 5 in let y 🚀 10 in z').toString();
        const expected = 'Program (Function Declaration ({x: int} let x = 5 in let y = 10 in z))';
        assert.equal(ast, expected);
    });
    it('👑 float (x: float) 🚀 match x with 🍭 [] -> 5.0 🍭 🕳 -> 6.0', () => {
        const ast = parse('👑 float (x: float) 🚀 match x with 🍭 [] -> 5.0 🍭 🕳 -> 6.0').toString();
        const expected = 'Program (Function Declaration ({x: float} match x with [] -> 5.0,any -> 6.0))';
        assert.equal(ast, expected);
    });
    it('👑 bool (odd : int) 🚀 match odd with 🍭 [] -> true 🍭 hd ⚡️ tl -> false', () => {
        const ast = parse('👑 bool (odd : int) 🚀 match odd with 🍭 [] -> true 🍭 hd ⚡️ tl -> false').toString();
        const expected = 'Program (Function Declaration ({x: float} match x with [] -> 5.0,any -> 6.0))';
        assert.equal(ast, expected);
    });
    it('👑 string (n : bool) 🚀 🤔 a then "hello" else "gracias"', () => {
        const ast = parse('👑 string (n : bool) 🚀 🤔 a then "hello" else "gracias"').toString();
        const expected = 'Program (Function Declaration ({n: int,m: int} n + m))';
        assert.equal(ast, expected);
    });
});
