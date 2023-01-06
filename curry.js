//Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each takes a single argument.

export default function curry(func) {
  return function curried(...args) {
    const context = this;
    if(args.length >= func.length) {
      return func.apply(context, [...args]);
    } 

    return function (...remaining) {
      return curried.apply(context, [...args, ...remaining]);
    }
  }
}
