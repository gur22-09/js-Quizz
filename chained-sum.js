/*Implement a sum function that accepts a number and allows for repeated calling with more numbers. 
Calling the function without an argument will sum up all the arguments thus far and return the total. */

/**
 * @param {number} number
 * @return {Function}
 */
export default function sum(number) {
  if(number == null) throw Error('no initial number passed')
  let result = number;
  return function(number) {
    if(!number) return result;
    return sum(number + result);
  }
}
