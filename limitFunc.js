// Implement a function that accepts a callback and a number n, which restricts invocation of the callback to at most n times. 
// Subsequent calls of the created function will return the result of the last invocation of the callback function. 
// The callback function is invoked with the this binding and arguments of the created function.

function limit(func, n = 1) {
  let count = 0;
  let res;
  
  return function (...args) {
    if(count >= n) {
      return res;
    }
    
    res = func.apply(this, [...args]);
    count++;
    
    return res;
  }
}
