const parse = require('./parser');
const fs = require('fs');

const path = fs.readFileSync(`${process.argv[2]}`);
const ast = parse(path).toString();
console.log(ast);
