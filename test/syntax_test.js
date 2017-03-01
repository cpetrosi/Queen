const fs = require('fs');
const ohm = require('ohm-js');
const assert = require('assert');

function parse(string) {
  const grammar = ohm.grammar(fs.readFileSync(`./syntax.ohm`));
  return grammar.match(string);
}

describe('QUEEN', () => {
    it('👑 helloWorld 🚀 🖨 "Hello World!" should be a valid function', () => {
        const match = parse('👑 helloWorld 🚀 🖨 "Hello World!"');
        assert.ok(match.succeeded());
    });
    it('👑 helloWorld 🖨 "Hello World!" should not be a valid function', () => {
        const match = parse('👑 helloWorld 🖨 "Hello World!"');
        assert.ok(match.failed());
    });
});
