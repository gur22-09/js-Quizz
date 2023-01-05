// given a deeply nested array flatten them
// [[1,2], [[4], [5]], 8, [[[9]]]] --> [1, 2, 4, 5, 8, 9]

function flateen(nums) {
  let i = 0;
  while(i < nums.length) {
    const element = nums[i]
    if(Array.isArray(element)) { 
      nums.splice(i, 1, ...element);
      i--;
    }else {
      i++;  
    }
  }
  
  return nums;
} 

// another approach using lazy generator evaluation
function* flattenGen(nums) {
  for(let num of nums) {
    if(Array.isArray(num)) {
      yield* flattenGen(num)
    }else {
      yield num
    }
  }  
}
let test = [[1,2], [[4], [5]], 8, [[[9]]]]
let res = [];
for(let num of flattenGen(test)) {
  res.push(num);
}
