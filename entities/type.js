class Type {

  constructor(isNumeric, canBeAssigned, comparableTypeList) {
    this.isNumeric = isNumeric;
    this.canBeAssigned = canBeAssigned;
    this.comparableTypeList = comparableTypeList;
  }

  isNumeric() {
    return this.isNumeric;
  }

  cannotBeAssignedToAVariable() {
    return !this.canBeAssigned;
  }

  canBeComparedTo(type2) {
    return (this.comparableTypeList.indexOf(type2) > -1);
  }

}
Type.FLOAT = new Type(true, true, [Type.FLOAT, Type.INT]);
Type.INT = new Type(true, true, [Type.FLOAT, Type.INT]);
Type.LIST = new Type(true, true, []);
Type.STRING = new Type(false, true, [Type.STRING]);
Type.TUPLE = new Type(false, true, []);
Type.BOOL = new Type(false, true, [Type.BOOL]);
Type.CONS = new Type(false, true, [Type.CONS]);
Type.CONDITIONAL = new Type(false, false, []);
Type.PRINT = new Type(false, false, []);

module.exports = Type;
