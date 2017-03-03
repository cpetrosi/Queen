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
        const expected = 'Program (Function Declaration ({odd: int} match odd with [] -> true,hd ⚡️ tl -> false))';
        assert.equal(ast, expected);
    });
        it('👑 bool (x: int) 🚀 let x 🚀 5 in match x with 🍭 🕳 -> true 🍭 🕳 -> false', () => {
        const ast = parse('👑 bool (x: int) 🚀 let x 🚀 5 in match x with 🍭 🕳 -> true 🍭 🕳 -> false').toString();
        const expected = 'Program (Function Declaration ({x: int} let x = 5 in match x with any -> true,any -> false))';
        assert.equal(ast, expected);
    });
    it('👑 int (x: int y: int) 🚀 x + y', () => {
        const ast = parse('👑 int (x: int y: int) 🚀 x - y').toString();
        const expected = 'Program (Function Declaration ({x: int,y: int} x - y))';
        assert.equal(ast, expected);
    });
    it('👑 bool (x: int) 🚀 let x 🚀 5 in match x with 🍭 5 -> true 🍭 🕳 -> false', () => {
        const ast = parse('👑 bool (x: int) 🚀 let x 🚀 5 in match x with 🍭 5 -> true 🍭 _ -> false').toString();
        const expected = 'Program (Function Declaration ({x: int} let x = 5 in match x with 5 -> true, any -> false))';
        assert.equal(ast, expected);
    });
    it('👑 int (x: int y: int) 🚀 x + y', () => {
        const ast = parse('👑 int (x: int y: int) 🚀 x - y').toString();
        const expected = 'Program (Function Declaration ({x: int,y: int} x - y))';
        assert.equal(ast, expected);
    });
    it('👑 int * int (x: int) 🚀 [6, 7, 8] @ [9]', () => {
        const ast = parse('👑 int * int (x: int) 🚀 [6, 7, 8] @ [9]').toString();
        const expected = 'Program (Function Declaration ({x: int} [6, 7, 8]@[9]))';
        assert.equal(ast, expected);
    });
});
