// bubble sort
var sortArray = function(nums) {
    const len = nums.length;
    let swapped = false, temp;
    for (let i=0;i<len;i++) {
        swapped = false;
        for (let j=0;j<len-1;j++) {
            if (nums[j] > nums[j+1]) {
                temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
                swapped = true;
            }
        }
        if (!swapped) {
            return nums;
        }
    }
    return nums;
};

// quick sort
var sortArray = function(nums) {
    if (nums.length <= 1) return nums;
    const pivot = nums.pop();
    const less = sortArray(nums.filter(n => n <= pivot));
    const more = sortArray(nums.filter(n => n > pivot));
    return less.concat(pivot, more);
};

// merge sort
function merge(left, right) {
    let sortedArr = [] // the sorted items will go here
    while (left.length && right.length) {
      // Insert the smallest item into sortedArr
      if (left[0] < right[0]) {
        sortedArr.push(left.shift())
      } else {
        sortedArr.push(right.shift())
      }
    }
    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right]
}

function mergeSort(arr) {
    // Base case
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    // Recursive calls
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
  }