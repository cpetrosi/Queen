const fs = require('fs');
const ohm = require('ohm-js');
const assert = require('assert');

function parse(string) {
  const grammar = ohm.grammar(fs.readFileSync('./syntax.ohm'));
  return grammar.match(string);
}

describe('QUEEN SYNTAX', () => {
  it('👑 string hellowWorld 🚀 🖨 "Hello World!" should be a valid function', () => {
    const match = parse('👑 string helloWorld 🚀 🖨 "Hello World!"');
    assert.ok(match.succeeded());
  });

  it('👑 string (helloWorld : string) 🖨 "Hello World!" should not be a valid function', () => {
    const match = parse('👑 string (helloWorld : string) 🖨 "Hello World!"');
    assert.ok(match.failed());
  });

  it('👑 int matchMe (f145 : int) 🚀 match f145 with 🍭 f145 -> "Success!" should be a valid function', () => {
    const match = parse('👑 int matchMe (f145 : int) 🚀 match f145 with 🍭 f145 -> "Success!"');
    assert.ok(match.succeeded());
  });

  it('👑 bool test (odd : int) 🚀 match odd with 🍭 [] -> true 🍭 hd ⚡️ tl -> false should be a valid function', () => {
    const match = parse('👑 bool test (odd : int) 🚀 match odd with 🍭 [] -> true 🍭 hd ⚡️ tl -> false');
    assert.ok(match.succeeded());
  });

  it('👑 int nine (x : int) 🚀 let x 🚀 4 + 5 in 5 should be a valid function', () => {
    const match = parse('👑 int nine (x : int) 🚀 let x 🚀 4 + 5 in 5');
    assert.ok(match.succeeded());
  });

  it('👑 float Floaty (x : float) 🚀 let floatList 🚀 x @ [1.0, 2.0] should be a valid function', () => {
    const match = parse('👑 float Floaty (x : float) 🚀 let floatList 🚀 [3.0] @ [1.0, 2.0]');
    assert.ok(match.succeeded());
  });

  it('👑 int dontMatchMe (f145 : int) 🚀 f145 with 🍭 f145 -> "Success!" should not be a valid function', () => {
    const match = parse('👑 int (f145 : int) 🚀 f145 with 🍭 f145 -> "Success!"');
    assert.ok(match.failed());
  });

  it('bool Odd (odd : int) 🚀 match odd with 🍭 3 -> true 🍭 4 -> false should not be a valid function', () => {
    const match = parse('bool (odd : int) 🚀 match odd with 🍭 3 -> true 🍭 4 -> false');
    assert.ok(match.failed());
  });

  it('👑 int badBinding (x) 🚀 let x 🚀 4 + 5 in 5 should not be a valid function', () => {
    const match = parse('👑 int (x) 🚀 let x 🚀 4 + 5 in 5');
    assert.ok(match.failed());
  });

  it('👑 float rogueRocket (x : float) let floatList 🚀 x @ [1.0, 2.0] should not be a valid function', () => {
    const match = parse('👑 float (x : float) let floatList 🚀 x @ [1.0, 2.0]');
    assert.ok(match.failed());
  });

  it('👑 bool consMe (odd : int list) 🚀 match odd with 🍭 [] -> true 🍭 3 ⚡️ tl -> false should be a valid function', () => {
    const match = parse('👑 bool consMe (odd : int list) 🚀 match odd with 🍭 [] -> true 🍭 3 ⚡️ tl -> false');
    assert.ok(match.succeeded());
  });
});
