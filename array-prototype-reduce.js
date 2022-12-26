/**
 * @callback callbackFn
 * @param {*} [initialValue]
 * @return {Array}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
  let i = 0;
  
  if(!initialValue && this.length === 0) {
    throw new TypeError('cannot reduce empty array with no initial value');
  }

  if(initialValue === undefined) {
    initialValue = this[0];
    i = 1;
  }

  for(i; i < this.length; i++) {
    const val = this[i];
     
    initialValue = callbackFn(initialValue, val, i, this);
  }

  return initialValue;
};
