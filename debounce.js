// what is debounce ?
// debouncing a function ensures that the invocation of the function is delayed by X milliseconds of wait time
// from the last time the function was called.

/**
 * @callback func
 * @param {number} wait
 * @return {Function}
 */
function debounce(func, wait = 0) { 
  let timerRef = null;
  return function(...args) {
    clearTimeout(timerRef);
    
    timerRef = setTimeout(() => {
      func.apply(this, args); 
    }, wait);
    
  }
}


