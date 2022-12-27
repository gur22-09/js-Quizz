// Insertion sort is a simple sorting algorithm which compares elements one at a time with preceding element(s), "inserting" them into the correct position, and progressively building up a sorted array.

// The algorithm starts by examining the 2nd element of the input array (the "current" element), and compares it with its preceding element (i.e. the 1st element). If the current element is smaller, we swap their places (by copy). The result is that the first 2 elements are sorted correctly in ascending order.

// Illustration of first iteration of insertion sort algorithm

// The algorithm then moves onto the next element in the input list and compares it with preceding elements (already sorted in ascending order) to insert it into the right position. Since preceding elements are already sorted, the algorithm only needs to compare the current element with every preceding element until the current element is not smaller than that element. 
// It's then inserted into the right position in the list and the algorithm moves onto the next element in the input list.

/*
 param
 @arr - array
*/
// ascending
function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1;
    
    while(j >= 0 && arr[j] > arr[i]) {
      arr[j + 1] = arr[j];
      j--;
    }
    
    arr[j + 1] = current;
  }
  
  return arr;
}
