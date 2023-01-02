// Spec
// Promises are meant to be chained, so the function needs to return a Promise.
// If the input array is empty, the returned Promise will be forever pending.
// The input array can contain non-Promises.


/**
 * @param {Array} iterable
 * @return {Promise}
 */
export default function promiseRace(iterable) {
  return new Promise((res, rej) => {
   if(!iterable.length) {
     //keep it in pending state
     return;
   }

   for(let promise of iterable) {
    Promise.resolve(promise).then(res, rej)
   }
  }); 
}
