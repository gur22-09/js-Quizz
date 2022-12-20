// Implement your own Function.prototype.bind without calling the native bind method. To avoid overwriting the actual Function.prototype.bind, we shall instead implement it as Function.prototype.myBind.

// questions
// can i use other modern js function prototype like call and apply ?
// yes

// bind returns a new function with this keyword bounded to the given input 

Function.prototype.myBind = function(thisArg, ...bindArgs) {
  return (...args) => {
    return this.apply(thisArg, [...bindArgs, ...args]);
  }
}
