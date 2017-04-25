class Funcall {
  constructor(id, args) {
    this.id = id;
    this.args = args;
  }

   analyze(context) {
     if (context.hasBeenDeclared(this.id)) {
       const func = context.getValue(this.id);
       func.analyze(context);
       this.type = func.returnType;

       if (this.args.length !== func.parameters.length) {
         throw new Error(`ARITY ERROR: ${this.args.length} arguments provided and ${func.parameters.length} were expected.`);
       }

       for (let i = 0; i < this.args.length; i += 1) {
         if (!context.hasBeenDeclared(this.args[i])) {
           throw new Error(`UNDECLARED VARIABLE: ${this.args[i]} has not been declared.`);
         }

         const arg = context.getValue(this.args[i]);
         if (arg.type !== func.paramTypes[i]) {
           throw new Error(`TYPE ERROR: Expected ${this.args[i]} to be ${func.paramTypes[i].toString()}.`);
         }
       }
     } else {
       throw new Error(`UNDECLARED VARIABLE: ${this.id} has not been declared.`);
     }
   }


  toString() {
    return `${this.id}${this.args}`;
  }
}

module.exports = Funcall;
