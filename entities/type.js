class Type {

  constructor(isNumeric, canBeAssigned, comparableTypeList, str) {
    this.isNumeric = isNumeric;
    this.canBeAssigned = canBeAssigned;
    this.comparableTypeList = comparableTypeList;
    this.str = str;
  }

  cannotBeAssignedToAVariable() {
    return !this.canBeAssigned;
  }

  canBeComparedTo(type2) {
    return this.comparableTypeList.includes(type2.str);
  }

}
Type.FLOAT = new Type(true, true, ['float', 'int'], 'float');
Type.INT = new Type(true, true, ['float', 'int'], 'int');
Type.LIST = new Type(true, true, ['list'], 'list');
Type.STRING = new Type(false, true, ['string'], 'string');
Type.TUPLE = new Type(false, true, ['tuple'], 'tuple');
Type.BOOL = new Type(false, true, ['bool'], 'bool');
Type.CONS = new Type(false, true, ['cons'], 'cons');
Type.CONDITIONAL = new Type(false, false, ['conditional'], 'conditional');

module.exports = Type;
