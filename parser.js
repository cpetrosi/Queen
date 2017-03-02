// CST -> AST
const semantics = aelGrammar.createSemantics().addOperation('tree', {
  Program(body) {return new Program(body.tree());},
  Exp_binary(left, op, right) {return new BinaryExpression(left.tree(), op.sourceString, right.tree());},
  Term_binary(left, op, right) {return new BinaryExpression(left.tree(), op.sourceString, right.tree());},
  Factor_negate(op, operand) {return new UnaryExpression('-', operand.tree());},
  Primary_parens(open, expression, close) {return expression.tree();},
  number(chars) {return new NumericLiteral(+this.sourceString);},
});
