// polyfill function for promise all

function promiseAll(promiseArr) {
  return new Promise((res, rej) => {
    let count = 0;
    const result = [];
    const promiseLen = promiseArr.length;
    
    for(let promise of promiseArr) {
      Promise.resolve(promise).then((response) => {
        count++;
        result.push(response);
        if(count === promiseLen) {
          res(result);
        }
      }).catch(rej);
    }
    
  });
}



